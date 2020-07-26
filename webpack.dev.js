const {merge} = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const common = require('./webpack.config');

const dev = () => ({
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        hotOnly: true,
        contentBase: path.resolve(__dirname, 'articles', 'blue'),
        port: '8080',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization, Cache-Control',
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(c|sa)ss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                indentedSyntax: false,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|ico|ttf|woff|webp)$/,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ]
            },
        ],
    },
});


module.exports = env => merge(common(env), dev(env));
