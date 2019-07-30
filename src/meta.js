const { version } = require("freefolkcommon");
const appVersion = require("./../package.json").version;

exports.META = {
    getMetaVersion: () => {
        return new Promise((resolve, reject) => {
            resolve({
                appVersion,
                commonVersion: version,
                serverVersion: ""
            });
        });
    }
};