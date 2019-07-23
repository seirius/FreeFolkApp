const { dialog } = require("electron").remote;
const isDev = require("electron-is-dev");
const fs = require("fs");
const os = require("os");
const path = require("path");
const ffmpeg = require("fluent-ffmpeg");
const resourcesPath = isDev ? "ffmpeg-src" : process.resourcesPath;
if (process.platform === "linux") {
    ffmpeg.setFfmpegPath(path.join(resourcesPath, "debian-64/ffmpeg"));
} else if (process.platform === "win32") {
    ffmpeg.setFfmpegPath(path.join(resourcesPath, "win-64/bin/ffmpeg"));
}

const { YOUTUBE } = require("./libs/youtube");
const ytdl = require("ytdl-core");

const { WINDOW_MANAGER } = require("./window-manager");

const WebTorrent = require("webtorrent");

function downloadVideo(args) {
    return new Promise((resolve, reject) => {
        const { videoUrl, videoTitle, savePath, downloadProgressCallback } = args;
        const vid = ytdl(videoUrl);
        vid.pipe(fs.createWriteStream(path.join(savePath, safeFilename(videoTitle) + ".mp4")));
        vid.on("response", response => {
            if (downloadProgressCallback) {
                let dataRead = 0;
                const contentLength = response.headers["content-length"];
                response.on("data", data => {
                    dataRead += data.length;
                    downloadProgressCallback({
                        progress: dataRead / contentLength * 100,
                        contentLength
                    });
                });
            }
            response.on("end", resolve);
        }).on("error", reject);
    });
}

function downloadMusic(args) {
    return new Promise((resolve, reject) => {
        const { savePath, videoTitle, videoUrl, downloadProgressCallback } = args;
        let dataRead = 0;
        downloadVideo({
            savePath,
            videoTitle,
            videoUrl,
            downloadProgressCallback: callbackArgs => {
                dataRead = (callbackArgs.progress / 2);
                downloadProgressCallback({
                    progress: dataRead,
                    videoProgress: callbackArgs.progress,
                    musicProgress: 0
                });
            }
        })
            .then(response => {
                const fileName = safeFilename(videoTitle);
                const videoPath = path.join(savePath, `${fileName}.mp4`);
                const mp3Path = path.join(savePath, `${fileName}.mp3`);
                ffmpeg(videoPath)
                    .format("mp3")
                    .on("progress", progress => {
                        dataRead += (progress.percent / 2);
                        downloadProgressCallback({
                            progress: dataRead,
                            musicProgress: progress.percent,
                            videoProgress: 100
                        });
                    })
                    .save(mp3Path)
                    .on("end", resolve)
                    .on("error", reject);
            }).catch(reject);
    });
}

function safeFilename(oFilaname) {
    return oFilaname.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

function removeItems(args) {
    const { filePaths } = args;
    const promises = [];
    filePaths.forEach(filePath => {
        promises.push(new Promise((resolve, reject) => {
            fs.exists(filePath, exists => {
                if (exists) {
                    fs.unlink(filePath, err => err ? reject(err) : resolve());
                } else {
                    resolve();
                }
            });
        }));
    });
    return Promise.all(promises);
}

function removeVideosContent(args) {
    const { savePath, videoTitles, fileTypes } = args;
    const filePaths = [];
    videoTitles.map(videoTitle => {
        const safeTitle = safeFilename(videoTitle);
        fileTypes.forEach(fileType => filePaths.push(path.join(savePath, safeTitle + fileType)));
    });
    return removeItems({ filePaths });
}

async function getItemDiskInformation(args) {
    const { title, filePath, fileTypes } = args;
    const info = {};
    if (title && filePath && fileTypes) {
        const safeTitle = safeFilename(title);
        info.safeTitle = safeTitle;
        await Promise.all(fileTypes.map(async fileType => {
            try {
                await fs.promises.access(path.join(filePath, safeTitle + fileType));
                info[fileType] = true;
            } catch (error) {
                info[fileType] = false;
            }
        }));
    }
    return info;
}

function getAvailableFormats() {
    return new Promise((resolve, reject) => {
        ffmpeg.getAvailableFormats((err, formats) => {
            if (err) {
                reject(err);
            } else {
                resolve(formats);
            }
        });
    });
}

function toFormat(args) {
    const { inputFile, outputFile, format, progressCallback } = args;
    return new Promise((resolve, reject) => {
        if (!inputFile || !outputFile || !format) {
            reject("Input file, output file or format no defined");
            return;
        }
        const ff = ffmpeg(inputFile);
        if (progressCallback) {
            ff.on("progress", progress => {
                progressCallback({
                    progress: progress.percent
                });
            });
        }
        ff
            .save(outputFile)
            .on("end", resolve)
            .on("error", reject);
    })
}

const userConfigDefault = {
    setPath: "",
    videoList: []
};

const userDir = path.join(os.homedir(), "free-folk");
const userFile = path.join(userDir, "config.json");

let userConfig;

async function getUserConfig() {
    if (userConfig) {
        return Promise.resolve(userConfig);
    }
    try {
        await fs.promises.access(userDir);
    } catch (error) {
        await fs.promises.mkdir(userDir);
    }
    try {
        await fs.promises.access(userFile);
    } catch (error) {
        await fs.promises.writeFile(userFile, JSON.stringify(userConfigDefault, null, 2));
        userConfig = userConfigDefault;
    }
    try {
        userConfig = JSON.parse(await fs.promises.readFile(userFile));
    } catch (error) {
        return Promise.reject(error);
    }
    return Promise.resolve(userConfig);
}

async function saveUserConfig(config) {
    await fs.promises.writeFile(userFile, JSON.stringify(config, null, 2));
}

async function saveCurrentUserConfig() {
    if (!userConfig) {
        userConfig = await getUserConfig();
    }
    await saveUserConfig(userConfig);
}


const clientTorrent = new WebTorrent();

function addTorrent(args) {
    const { magnetLink, added, download } = args;
    clientTorrent.add(magnetLink, torrent => {
        if (added) {
            added({
                name: torrent.name,
                hash: torrent.infoHash
            });
        }
        if (download) {
            torrent.on("download", bytes => {
                download({
                    progress: torrent.progress * 100,
                    speed: torrent.downloadSpeed / 1048576
                });
            });
        }
    });
}



window.electron = {
    dialog,
    fs,
    path,
    ffmpeg,
    WINDOW_MANAGER,
    google: {
        YOUTUBE,
        downloadVideo,
        downloadMusic,
        removeItems,
        removeVideosContent,
        getItemDiskInformation,
        getAvailableFormats
    },
    setImmediate,
    init: {
        videoSearch: "",
        path: ""
    },
    formats: {
        to: toFormat
    },
    config: {
        getUserConfig,
        saveUserConfig,
        saveCurrentUserConfig
    },
    torrent: {
        addTorrent
    }
};