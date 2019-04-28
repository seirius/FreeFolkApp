const { app, BrowserWindow } = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        width: 1200,
        height: 600
    });

    win.loadFile('web-dist/index.html');

    win.webContents.openDevTools();
}

app.on('ready', createWindow);