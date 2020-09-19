const fs = require('fs');
const path = require('path');

const logger = require('./../logger');
const {getArticlePath} = require('./../helpers/paths');
const {getNameFromArgs}  = require('./../helpers/args');

const doesArticleExist = articleName =>
    fs.existsSync(getArticlePath(articleName));

const createArticleDir = articleName => {
    logger.infoLog('Создаём директорию');

    fs.mkdirSync(getArticlePath(articleName));

    logger.successLog('Директория создана');
};

const createBaseFiles = articleName => {
    logger.infoLog('Создаём директорию с начальными файлами');

    const srcPath = getArticlePath(articleName);

    fs.writeFileSync(path.join(srcPath, 'index.js'), 'import \'./../../common\';');
    fs.writeFileSync(path.join(srcPath, 'index.html'), '');
    fs.writeFileSync(path.join(srcPath, 'main.scss'), '');

    logger.successLog('Файлы созданы');
};


const initArticle = () => {
    const articleName = getNameFromArgs();

    if (doesArticleExist(articleName)) {
        logger.errorLog('Такая статья уже существует');
        return;
    }

    createArticleDir(articleName);
    createBaseFiles(articleName);
};

initArticle();
