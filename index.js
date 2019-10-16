#!/usr/bin/env node

const {currentBranchName} = require("./lib/git-utils");

const red = '\033[0;31m'
const green = '\033[0;32m'
const grey = '\033[1;30m'
const nc = '\033[0m'

if (!process.argv[2]) {
  console.error("Usage: branch-naming-check <regexp>");
  process.exitCode = 1;
  return;
}

currentBranchName().then(branchName => {
  let validBranchNameRegExp;
  try {
    validBranchNameRegExp = new RegExp(process.argv[2], "g");
  } catch (error) {
    console.error(error.message + "\n");
    process.exitCode = 1;
    return;
  }

  if (validBranchNameRegExp.test(branchName)) {
    process.exitCode = 0;
    console.log(`${green}✔   ${branchName}${nc} branch naming convention correctly applied`);
  } else {
    process.exitCode = 1;
    console.error(`${red}✖   ${branchName}${nc} branch naming convention not followed ${grey}[feature|bugfix|hotfix|support]/[location]-[name]-[new|modified|fix]${nc}`);
  }
});
