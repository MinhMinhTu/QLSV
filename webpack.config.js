const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const {alias} = require(path.resolve(__dirname,'src/assets/scripts/alias.js'))

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'index_bundle.js',
        publicPath: '/'   
    },
    resolve :{
       alias : alias(path.resolve(__dirname))
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                        "plugins": [ 
                            "@babel/plugin-syntax-dynamic-import",
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                loader: 'file-loader',
                test: /\.ipe?g $ | \.gif$ | \.png$ | \.svg$ | \.woff$ | \.woff2$ | \.eot$ | \.wav$ | \.ttf$| \.mp3$ /
            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        })

    ],
    devServer: {
        historyApiFallback: true,
        port:9000
    }

};