const { app, BrowserWindow } = require('electron');
const path = require("path");

if (require("electron-squirrel-startup")) return;

const os = require('os').platform();

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

    win.webContents.on('new-window', (event, url, frameName, disposition, options, additionalFeatures) => {
        if (frameName === 'video') {
            const isVideo = url.indexOf("/mp4") > -1;
            let width = isVideo ? 1300 : 300;
            let height = isVideo ? 820 : 100;
            Object.assign(options, { width, height });
        }
    });

    if (os === "win32") {
        autoUpdater.checkForUpdatesAndNotify();
    }
}

app.on('ready', createWindow);