const {
    contextBridge,
    ipcRenderer
} = require("electron");

const { spawn } = require('child_process');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
    "api", {
        send: (channel, data) => {
            // whitelist channels
            let validChannels = ['close', 'minimize', 'maximize', 'unmaximize'];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        receive: (channel, func) => {
            let validChannels = ['maximized', 'unmaximized'];
            if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender`
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        },
        check: Check
    }
);

function Check(){

    return new Promise((resolve, reject) => {
        const vn = spawn('vnstat', ['--version']);

        vn.stdout.on('data', (data) => {
            resolve(data);
        });

        vn.stderr.on('data', (data) => {
            reject(data)
        });
    });
}
