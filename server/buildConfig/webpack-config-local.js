const path = require('path');
const Dotenv = require('dotenv');
const { merge } = require('webpack-merge');
const { DefinePlugin } = require('webpack');

const envConfig = Dotenv.config({ path: path.join(__dirname, 'env', '.env.local') }).parsed;

const baseConfig = require('./webpack-config-base');

const config = {
    mode: 'development'
    // plugins: [
    //     new DefinePlugin({
    //         'process.env': JSON.stringify(envConfig),
    //     })
    // ],
};

module.exports = merge(baseConfig, config);
