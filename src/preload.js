const { dialog } = require("electron").remote;
const fs = require("fs");
const path = require("path");

console.log("Hello world");

window.electron = {
    dialog,
    fs,
    path
};