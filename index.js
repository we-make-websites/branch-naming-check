#!/usr/bin/env node

const {currentBranchName} = require('./lib/git-utils');

const red = '\033[0;31m'
const green = '\033[0;32m'
const grey = '\033[1;30m'
const nc = '\033[0m'

currentBranchName().then((branchName) => {
  if (branchName.match(/^master|staging|development|((bugfix|feature|hotfix|release)\/[A-Z]+-\d+-\w{5,})$/g)) {
    process.exitCode = 0;
    console.log(`${green}✔   ${branchName}${nc} branch naming convention correctly applied`);
  } else {
    process.exitCode = 1;
    console.error(`${red}✖   ${branchName}${nc} branch naming convention not followed ${grey}[bugfix|feature|hotfix|release]/[key-id]-[name]${nc}`);
  }
});
