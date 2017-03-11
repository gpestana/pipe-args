#!/usr/bin/env node

'use strict';

module.exports.load = function () {
  let stdin;
  if (process.stdin.isTTY) return;

  try {
    stdin = require('fs').readFileSync('/dev/stdin').toString();

  } catch(e) {
    if (e.code != 'EAGAIN') throw e;
    else return;
  };

  if(stdin) process.argv.push(stdin.trim());

};

