'use strict';

let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/js/script.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    watch: true,
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            debug: true,
                            corejs: 3,
                            useBuiltIns: "usage",
                        }]
                    ],
                    plugins: [
                        ["@babel/plugin-proposal-class-properties", {
                            "loose": true
                        }]
                    ]
                }
            }
        }, ]
    },
};