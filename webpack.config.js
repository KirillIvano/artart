const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = env => ({
    entry: path.join(__dirname, 'articles', env.name, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'articles', env.name, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'articles', env.name, 'index.html'),
            minify: false,
            inlineSource: '.(js|css)$',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],
    module: {
        rules: [{
                test: /\.js?$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                }, ],
            },
            {
                test: /\.html/,
                loader: 'html-loader'
            },
        ],
    },

});