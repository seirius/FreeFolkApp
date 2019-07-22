const { remote } = require("electron");

exports.WINDOW_MANAGER = {
    minMax: () => {
        const window = remote.getCurrentWindow();
        if (window.isMaximized) {
            window.unmaximize();
        } else {
            window.maximize();
        }
    },
    min: () => {
        remote.getCurrentWindow().minimize();
    },
    close: () => {
        remote.getCurrentWindow().close();
    }
};