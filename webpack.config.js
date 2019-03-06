const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080/',
        //'webpack-hot-middleware/client',
        './src/index.js'
      ],
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'index_bundle.js',
        publicPath: '/'   ///react-router cho webpack chuyển hướng tất cả đến file index.html
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{  
                            "presets" : [
                                "@babel/preset-env",
                                "@babel/preset-react"
                            ],
                            "plugins": [  /// 2 plugin này cho phép chạy được arrow function trong webpack
                                "@babel/plugin-syntax-dynamic-import",
                                "@babel/plugin-proposal-class-properties"
                            ]
                    }
                }
            },
            {
                test : /\.(sc|sa|c)ss$/,
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin ({
            template : './src/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true, //react-router cho webpack chuyển hướng tất cả đến file index.html
        }

};