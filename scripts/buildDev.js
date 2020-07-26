
const logger = require('./../logger');
const {getDevConfigPath} = require('./../helpers/paths');
const {getNameFromArgs} = require('./../helpers/args');
const {runArticleScript} = require('../helpers/runArticleScript');


const getBuildCommand = articleName => {
    const configPath = getDevConfigPath(articleName);

    return `npx webpack-dev-server --config ${configPath} --env.name=${articleName}`;
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
