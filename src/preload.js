const { dialog } = require("electron").remote;
const fs = require("fs");
const path = require("path");
const ffmpeg = require("fluent-ffmpeg");
const {google} = require("googleapis");
const youtube = google.youtube("v3");
const CREDENTIALS = require("../FreefolkCredentials.json");
const youtubedl = require("@microlink/youtube-dl");

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

window.electron = {
    dialog,
    fs,
    path,
    ffmpeg,
    google: {
        getPlaylist
    },
    youtubedl,
    setImmediate
};