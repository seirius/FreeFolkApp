const {google} = require("googleapis");
const youtube = google.youtube("v3");
const CREDENTIALS = require("../FreefolkCredentials.json");

youtube.playlistItems.list({
    key: "AIzaSyDt_dCzvULBfqX9k2r-9-XJ2nRiEEHhUqg",
    part: "id",
    playlistId: "PLpqYk0rZC57reX6PJE-mN8xiYTyXihZ5r",
    maxResults: 10,
    
}, (err, results) => {
    if (err) {
        console.error(err);
    } else {
        console.log(results);
    }
});