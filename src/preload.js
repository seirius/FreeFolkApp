const { dialog } = require("electron").remote;
const fs = require("fs");
const path = require("path");
const ffmpeg = require("fluent-ffmpeg");

window.electron = {
    dialog,
    fs,
    path,
    ffmpeg
};