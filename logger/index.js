/* eslint-disable no-console */
const chalk = require('chalk');


const errorLog = err =>
    console.log(chalk.red(err));

const infoLog = info =>
    console.log(chalk.blue(info));

const successLog = message =>
    console.log(chalk.green(message));


module.exports = {
    errorLog,
    infoLog,
    successLog,
};
