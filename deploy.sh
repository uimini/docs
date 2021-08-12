#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push git@github.com:uimini/docs.git main:gh-pages-branch

cd -
