# branch-naming-check
Enforce naming conventions on git branches.

`branch-naming-check` is a tool that checks whether or not the current branch of a git project match a certain name pattern (specified as a regular expression). This tool is primarily used as a git hook to enforce teams naming conventions.

## Install

```
yarn add @we-make-websites/branch-naming-check --dev
```

## Versions

The version you use depends on whether the project has been migrated to Jira or not.

* **1.1.0** - Jira branch name format
* **1.0.8** - Asana branch name format