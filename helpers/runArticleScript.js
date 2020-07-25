const childProcess = require('child_process');
const path = require('path');


const runArticleScript = (articleName, command) => {
    childProcess.execSync(
        command,
        {
            stdio: 'inherit',
            cwd: path.resolve(__dirname, '..'),
        },
    );
};


module.exports = {
    runArticleScript,
};
