
const path = require('path');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = function override(config, env) {

    config.module.rules.push({
               test: /\.wasm$/,
               loaders: ['base64-loader'],
               type: 'javascript/auto',
    });

    return config;
}