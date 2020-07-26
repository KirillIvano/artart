const path = require('path');

const {ARTICLES_PATH} = require('./../settings');


const getArticlePath = name => path.join(ARTICLES_PATH, name);
const getArticleFilePath = (article, file) => path.join(ARTICLES_PATH, article, file);
const getDevConfigPath = article => path.resolve(__dirname, '..', 'webpack.dev.js');
const getProdConfigPath = article => path.resolve(__dirname, '..', 'webpack.prod.js');


module.exports = {
    getArticlePath,
    getArticleFilePath,
    getDevConfigPath,
    getProdConfigPath,
};

