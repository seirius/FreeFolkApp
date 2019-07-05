const {google} = require("googleapis");
const youtube = google.youtube("v3");
const CREDENTIALS = require("../FreefolkCredentials.json");
const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const path = require("path");

const WebTorrent = require("webtorrent");

const client = new WebTorrent();

client.add("magnet:?xt=urn:btih:1FBDCE143D18131C87F900E4CB2344023F3F70B7&dn=%5BHorribleSubs%5D+Bungou+Stray+Dogs+-+36+%5B720p%5D+mkv&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.ch%3A1337%2Fannounce", torrent => {

    torrent.on("ready", () => console.log("ready"));

    torrent.on("done", () => {
        console.log("done");
        torrent.files.forEach(file => {
            console.log(file.path);
            file.getBuffer((err, buffer) => {
                fs.writeFile(path.join("/home/andriy/Downloads/torrent-test/", file.name), buffer, (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("file written");
                    }
                });
            });
        });
    });

    torrent.on("error", console.error);

    torrent.on("download", bytes => {
        console.log("downloaded", bytes);
        console.log("total downloaded", torrent.downloaded);
        console.log("speed", torrent.downloadSpeed);
        console.log("progress", torrent.progress);
    });

    console.log("client id downloading:", torrent.infoHash);
    // torrent.files.forEach(file => {
    //     console.log(file);
    // });
})

// youtube.playlistItems.list({
//     key: "AIzaSyDt_dCzvULBfqX9k2r-9-XJ2nRiEEHhUqg",
//     part: "id",
//     playlistId: "PLpqYk0rZC57reX6PJE-mN8xiYTyXihZ5r",
//     maxResults: 10,
// }, (err, results) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(results);
//     }
// });

// youtube.videos.list({
//     key: "AIzaSyDt_dCzvULBfqX9k2r-9-XJ2nRiEEHhUqg",
//     part: "snippet",
//     id: "Ecsh90d9iJM"
// }, (err, result) => {
//     if (err) {
//         console.error(err);
//     }
//     if (result && result.data && result.data.items) {
//         result.data.items.forEach(vid => console.log("video", vid));
//     }
// });
