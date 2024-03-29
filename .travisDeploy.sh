#!/bin/sh
set -e

# setup ssh-agent and provide the GitHub deploy key
eval "$(ssh-agent -s)"
openssl aes-256-cbc -K $encrypted_dc4c0df7bb33_key -iv $encrypted_dc4c0df7bb33_iv -in id_ed25519.enc -out id_ed25519 -d
chmod 600 id_ed25519
ssh-add id_ed25519

./node_modules/.bin/gh-pages -d build/ -b gh-pages -r git@github.com:${TRAVIS_REPO_SLUG}.git 