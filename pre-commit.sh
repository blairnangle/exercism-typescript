#!/bin/zsh

npm run build
npm run test
eslint --fix .
