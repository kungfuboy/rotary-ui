#!/usr/bin/env sh
cd web/
rm -rf .git
git init .
git add .
git commit -m'deploy'
git push -f https://github.com/ti-alloy/rotary-ui.git master:gh-pages
cd -