const { dialog } = require("electron").remote;
const isDev = require("electron-is-dev");
const fs = require("fs");
const os = require("os");
const path = require("path");
const resourcesPath = isDev ? "ffmpeg-src" : process.resourcesPath;

const YOUTUBE = require("freefolkcommon").YOUTUBE({
    CREDENTIALS: require("./../FreefolkCredentials.json"),
    ffmpegPaths: {
        linuxPath: path.join(resourcesPath, "debian-64/ffmpeg"),
        windowsPath: path.join(resourcesPath, "win-64/bin/ffmpeg")
    }
});
const { WINDOW_MANAGER } = require("./window-manager");

const WebTorrent = require("webtorrent");

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

// function getAvailableFormats() {
//     return new Promise((resolve, reject) => {
//         ffmpeg.getAvailableFormats((err, formats) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(formats);
//             }
//         });
//     });
// }

// function toFormat(args) {
//     const { inputFile, outputFile, format, progressCallback } = args;
//     return new Promise((resolve, reject) => {
//         if (!inputFile || !outputFile || !format) {
//             reject("Input file, output file or format no defined");
//             return;
//         }
//         const ff = ffmpeg(inputFile);
//         if (progressCallback) {
//             ff.on("progress", progress => {
//                 progressCallback({
//                     progress: progress.percent
//                 });
//             });
//         }
//         ff
//             .save(outputFile)
//             .on("end", resolve)
//             .on("error", reject);
//     })
// }

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
    WINDOW_MANAGER,
    google: {
        YOUTUBE,
        removeItems
        // getAvailableFormats
    },
    setImmediate,
    init: {
        videoSearch: "",
        path: ""
    },
    // formats: {
    //     to: toFormat
    // },
    config: {
        getUserConfig,
        saveUserConfig,
        saveCurrentUserConfig
    },
    torrent: {
        addTorrent
    }
};