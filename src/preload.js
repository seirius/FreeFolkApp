const { dialog } = require("electron").remote;
const fs = require("fs");
const path = require("path");
const ffmpeg = require("fluent-ffmpeg");
const {google} = require("googleapis");
const youtube = google.youtube("v3");
const CREDENTIALS = require("../FreefolkCredentials.json");
const ytdl = require("ytdl-core");

function getPlaylist(url) {
    return new Promise((resolve, reject) => {
        youtube.playlistItems.list({
            key: CREDENTIALS.apiKey,
            part: "id,snippet",
            playlistId: url,
            maxResults: 50
        }, (err, response) => {
            if (err) {
                reject(err);
            } else {
                if (response.data && response.data.items) {
                    const items = response.data.items.map(oItem => {
                        const url = new URL("https://www.youtube.com/watch");
                        url.searchParams.append("v", oItem.snippet.resourceId.videoId);
                        return {
                            title: oItem.snippet.title,
                            video_url: url.href,
                            thumbnail_url: oItem.snippet.thumbnails.high.url
                        };
                    });
                    resolve(items);
                }
            }
        });
    });
}

function getBasicInfo(args) {
    return new Promise((resolve, reject) => {
        const {videoUrl} = args;
        ytdl(videoUrl, (err, info) => {
            if (err) {
                reject(err);
            } else {
                resolve(info);
            }
        });
    });
}

function downloadVideo(args) {
    return new Promise((resolve, reject) => {
        const {videoUrl, videoTitle, savePath} = args;
        const vid = ytdl(videoUrl);
        vid.pipe(fs.createWriteStream(path.join(savePath, safeFilename(videoTitle) + ".mp4")));
        vid.on("response", resolve).on("error", reject);
    });
}

function downloadMusic(args) {
    return new Promise((resolve, reject) => {
        const {savePath, videoTitle, videourl} = args;
        downloadVideo(args)
        .then(response => {
            const fileName = safeFilename(videoTitle);
            const videoPath = path.join(savePath, `${fileName}.mp4`);
            const mp3Path = path.join(savePath, `${fileName}.mp3`);
            ffmpeg(videoPath)
            .format("mp3")
            .save(mp3Path)
            .on("end", () => fs.unlink(videoPath, err => err ? reject(err) : resolve()))
            .on("error", reject);
        }).catch(reject)
    });
}

function safeFilename(oFilaname) {
    return oFilaname.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

function removeItems(args) {
    const {filePaths} = args;
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
    const {savePath, videoTitles, fileTypes} = args;
    const filePaths = [];
    videoTitles.map(videoTitle => {
        const safeTitle = safeFilename(videoTitle);
        fileTypes.forEach(fileType => filePaths.push(path.join(savePath, safeTitle + fileType)));
    });
    return removeItems({filePaths});
}

async function getItemDiskInformation(args) {
    const {title, filePath, fileTypes} = args;
    const info = {};
    if (title && filePath && fileTypes) {
        const safeTitle = safeFilename(title);
        await Promise.all(fileTypes.map(async fileType => {
            try {
                await fs.promises.access(path.join(filePath, safeTitle + fileType));
                info[fileType] = true;
            } catch(error) {
                info[fileType] = false;
            }
        }));
    }
    return info;
}


window.electron = {
    dialog,
    fs,
    path,
    ffmpeg,
    google: {
        getPlaylist,
        getBasicInfo,
        downloadVideo,
        downloadMusic,
        removeItems,
        removeVideosContent,
        getItemDiskInformation
    },
    setImmediate
};