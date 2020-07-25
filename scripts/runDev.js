
const logger = require('./../logger');
const {getArticleFilePath} = require('./../helpers/paths');
const {getNameFromArgs} = require('./../helpers/args');
const {runArticleScript} = require('../helpers/runArticleScript');


const getBuildCommand = articleName => {
    const configPath = getArticleFilePath(articleName, 'webpack.dev.js');

    return `npx webpack-dev-server --config ${configPath}`;
};

const buildDev = () => {
    logger.infoLog('Стартуем');

    const articleName = getNameFromArgs();
    if (!articleName) {
        logger.errorLog('Передай имя плз, вот так: `npm run <команда> -- --name=<имя>` :)');
        return;
    }

    const buildCommand = getBuildCommand(articleName);

    runArticleScript(articleName, buildCommand);
};

buildDev();
