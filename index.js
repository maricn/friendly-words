#!/usr/bin/env node

"use strict";

const fs = require('file-system');
const wf = require('./modules/word-friends');

console.time("Friend counting");

const words = fs.readFileSync('./words.txt', 'ascii')
  .split('\n')
  .filter(Boolean);

const friends = wf.countFriends(words);

console.log("Done processing the whole file. Processed [" + words.length + "] lines. Found [" + friends + "] friends.");

console.timeEnd("Friend counting");
