const path = require('path');

const {ARTICLES_PATH} = require('./../settings');


const getArticlePath = name => path.join(ARTICLES_PATH, name);
const getArticleFilePath = (article, file) => path.join(ARTICLES_PATH, article, file);


module.exports = {
    getArticlePath,
    getArticleFilePath,
};

