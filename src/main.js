const { app, BrowserWindow } = require('electron');
const path = require("path");

if (require("electron-squirrel-startup")) return;

const os = require('os').platform();

if (os === "win32") {
    const { autoUpdater } = require("electron-updater");

    autoUpdater.on('checking-for-update', () => {
        console.log('Checking for update...');
    });
    autoUpdater.on('update-available', (info) => {
        console.log('Update available.');
    });
    autoUpdater.on('update-not-available', (info) => {
        console.log('Update not available.');
    });
    autoUpdater.on('error', (err) => {
        console.log('Error in auto-updater. ' + err);
    });
    autoUpdater.on('download-progress', (progressObj) => {
        let log_message = "Download speed: " + progressObj.bytesPerSecond;
        log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
        log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
        console.log(log_message);
    });
    autoUpdater.on('update-downloaded', (info) => {
        console.log('Update downloaded');
    });
}


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