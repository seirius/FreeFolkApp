const { app, BrowserWindow } = require('electron');
const path = require("path");

if (require("electron-squirrel-startup")) return;

function createWindow() {
    let win = new BrowserWindow({
        width: 1200,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        },
        frame: false
    });

    win.loadFile('web-dist/index.html');

    // win.webContents.openDevTools();
}

app.on('ready', createWindow);