#!/usr/bin/env node

const { currentBranchName } = require("./lib/git-utils");

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
    console.log(`%c✔   ${branchName}%c matches branch naming convention`, 'color: green', 'color: white');
  } else {
    process.exitCode = 1;
    console.error(`%c✖   ${branchName}%c does not match branch naming convention %c[feature|bugfix|hotfix|support]/[location]-[name]-[new|modified|fix]`, 'color: red', 'color: white', 'color: grey');
  }
});
