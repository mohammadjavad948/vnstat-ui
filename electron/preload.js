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
        interfaces: Check,
        getData: getData
    }
);

function getData(options){

    return new Promise((resolve, reject) => {
        const vn = spawn('vnstat', [...options, '--json']);

        let Alld = '';

        vn.stdout.on('data', (data) => {
            Alld += data
        });

        vn.stderr.on('data', (data) => {
            reject(data)
        });

        vn.on('close', (code) => {
            if (code === 0){
                resolve(JSON.parse(Alld));
            } else {
                reject('something wrong happened')
            }
        })
    });
}

function Check(){

    return new Promise((resolve, reject) => {
        const vn = spawn('vnstat', ['--iflist']);

        let Alld = '';

        vn.stdout.on('data', (data) => {
            Alld += data
        });

        vn.stderr.on('data', (data) => {
            reject(data)
        });

        vn.on('close', (code) => {
            if (code === 0){
                resolve(Alld);
            } else {
                reject('something wrong happened')
            }
        })
    });
}
