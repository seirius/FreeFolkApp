const moment = require("moment");
var momentDurationFormatSetup = require("moment-duration-format");
momentDurationFormatSetup(moment);

const { google } = require("googleapis");
const youtube = google.youtube("v3");
const CREDENTIALS = require("./../../FreefolkCredentials.json");

function youtubeDurationToFf(duration) {
    if (duration) {
        return moment.duration(duration).format("hh:mm:ss");
    }
    return "";
}

const YOUTUBE = {
    getVideosInfo: (args) => {
        const { ids } = args;
        let videos = [];
        return new Promise((resolve, reject) => {
            if (ids && ids.length) {
                let idChain = "";
                ids.forEach((id, index) => {
                    idChain += id
                    if (index < ids.length - 1) {
                        idChain += ",";
                    }
                });
                youtube.videos.list({
                    key: CREDENTIALS.apiKey,
                    part: "snippet, contentDetails, id",
                    id: idChain
                }, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        const data = result.data;
                        if (data && data.items && data.items.length) {
                            videos = data.items.map(item => {
                                let thumbnails = item.snippet.thumbnails;
                                let url = new URL("https://www.youtube.com/watch");
                                url.searchParams.append("v", item.id);
                                return {
                                    title: item.snippet.title,
                                    video_url: url.href,
                                    thumbnail_url: thumbnails ? thumbnails.high.url : "",
                                    duration: youtubeDurationToFf(item.contentDetails.duration)
                                };
                            });
                        }
                        resolve(videos);
                    }
                });
            } else {
                reject("ID not found");
            }
        });
    },
    getPlaylist: (args) => {
        const {id} = args;
        return new Promise((resolve, reject) => {
            if (id) {
                youtube.playlistItems.list({
                    key: CREDENTIALS.apiKey,
                    part: "snippet",
                    playlistId: id,
                    maxResults: 50
                }, (err, response) => {
                    if (err) {
                        reject(err);
                    } else {
                        if (response.data && response.data.items) {
                            YOUTUBE.getVideosInfo({
                                ids: response.data.items.map(item => item.snippet.resourceId.videoId)
                            }).then(resolve).catch(reject);
                        }
                    }
                });
            } else {
                reject("ID not defined");
            }
    
        });
    },
    getByText: (args) => {
        const { text } = args;
        return new Promise((resolve, reject) => {
            if (text) {
                youtube.search.list({
                    key: CREDENTIALS.apiKey,
                    part: "id",
                    q: text,
                    maxResults: 50
                }, (err, response) => {
                    if (err) {
                        reject(err);
                    } else {
                        if (response.data && response.data.items) {
                            YOUTUBE.getVideosInfo({
                                ids: response.data.items.map(item => item.id.videoId)
                            }).then(resolve).catch(reject);
                        } else {
                            reject("Results not found");
                        }
                    }
                });
            } else {
                reject("No text to search by");
            }
        });
    }
};

exports.YOUTUBE = YOUTUBE;