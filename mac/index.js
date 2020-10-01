const { execPromise } = require('../utils');
const { spawn } = require("child_process");

const brewInstall = async () => {
  const brewCmd = '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"';

  try {
    const { error, stderr, stdout } = await execPromise(brewCmd);

    if (!error && !stderr) {
      console.log(stdout);
    }
  } catch (err) {
    console.log(err);
  }
};

const brewPackageInstaller = function () {
  const child = spawn('brew', ['bundle', '--verbose']);

  child.stdout.setEncoding('utf8');
  child.stderr.setEncoding('utf8');

  child.stdout.on('data', (chunk) => {
    console.log(chunk.toString());
  });

  child.stderr.on('data', (chunk) => {
    console.log(chunk.toString());
  });

  child.on('close', (code) => {
    console.log(`Process exited w/ status code: ${code}.\n\nBye 👋\n`);
  });
};

const init = async function () {
  await brewInstall();
  brewPackageInstaller();
};

init();
