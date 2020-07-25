const {argv} = require('yargs');


const getNameFromArgs = () =>
    argv.name;


module.exports = {
    getNameFromArgs,
};
