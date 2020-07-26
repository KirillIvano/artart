const {merge} = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJs = require('terser-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack');
const autoprefixer = require('autoprefixer');

const commonConfig = require('./webpack.config');

const prodConfigs = env => ({
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserJs(),
            new OptimizeCssAssetsPlugin(),
        ],
    },
    plugins: [
        new ImageminPlugin({
            // cache: true,
            imageminOptions: {
                plugins: [
                    ['gifsicle', {interlaced: true}],
                    ['mozjpeg', {quality: 80}],
                    ['optipng', {optimizationLevel: 9}],
                    [
                        'svgo',
                        {
                            plugins: [
                                {
                                    removeViewBox: false,
                                },
                            ],
                        },
                    ],
                ],
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(c|sa|le)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer(),
                            ],
                        },
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
                        loader: 'file-loader',
                        options: {
                            publicPath: '/static/img/',
                            outputPath: '/images/',
                            name: `${env.name}_[name].[ext]`,
                        }
                    },
                ]
            },
        ],
    },
});

module.exports = env => merge(commonConfig(env), prodConfigs(env));
