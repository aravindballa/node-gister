# Contributing

Thanks for being willing to contribute!

## Project setup

- Fork and clone the repo
- `npm install` to install dependencies
- `npm run validate` to validate you've got it working
- Create a branch for your PR

Tip: Keep your master branch pointing at the original repository and make pull requests from branches on your fork. To do this, run:

- `git remote add upstream https://github.com/aravindballa/node-gister.git`
- `git fetch upstream`
- `git branch --set-upstream-to=upstream/master master`

This will add the original repository as a "remote" called "upstream," Then fetch the git information from that remote, then set your local master branch to use the upstream master branch whenever you run git pull. Then you can make all of your pull request branches based on this master branch. Whenever you want to update your version of master, do a regular git pull.

### Add yourself as a contributor

This project follows the all contributors specification. To add yourself to the table of contributors on the README.md, please use the automated script as part of your PR:

`npm run add-contributor`

Follow the prompt and commit .all-contributorsrc and README.md in the PR. If you've already added yourself to the list and are making a new type of contribution, you can run it again and select the added contribution type.
