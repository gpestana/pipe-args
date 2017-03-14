#!/usr/bin/env node

const pipe = require('../index').load();
const tap = require('tap');

tap.test('it adds stdin to process.argv', (t) => {
  t.equal(process.argv.length, 3, 'process.argv with 3 elements');
  t.equal(process.argv[2], 'piped_arg', 'process.argv with piped arg');
  t.end();
});

