const {getProdConfigPath} = require('../helpers/paths');
const {getNameFromArgs} = require('../helpers/args');
const {runArticleScript} = require('../helpers/runArticleScript');
const logger = require('../logger');


const getBuildProdCommand = articleName => {
    const configPath = getProdConfigPath(articleName);

    return `npx webpack --config ${configPath} --env.name=${articleName}`;
};

const buildProd = () => {
    logger.infoLog('Стартуем продакшн сборку');

    const articleName = getNameFromArgs();
    if (!articleName) {
        logger.errorLog('Передай имя плз, вот так: `npm run <команда> -- --name=<имя>` :)');
        return;
    }

    const buildCommand = getBuildProdCommand(articleName);

    runArticleScript(articleName, buildCommand);
};


buildProd();
