const { exec } = require("child_process");

const brewCmd = '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"';
const brewInstaller = 'cd mac; brew bundle --verbose; cd ..';

const run = function (cmd) {
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error}`);
        } else if (stderr) {
            console.log(`stderr: ${stderr}`);
        } else {
            console.log(`stdout: ${stdout}`);
        }
    });
};

// INSTALL BREW
run(brewCmd);

// INSTALL BREW PACKAGES
run(brewInstaller);