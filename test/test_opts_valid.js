#!/usr/bin/env node

const opts = { commands: ['command'] };
const pipe = require('../index').load(opts);
const tap = require('tap');

tap.test('it adds stdin to process.argv', (t) => {
  t.equal(process.argv.length, 4, 'process.argv with 4 elements');
  t.equal(process.argv[3], 'piped_arg', 'process.argv with piped arg');
  t.end();
});

