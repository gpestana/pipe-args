#!/usr/bin/env node

const opts = { commands: ['some_other'] };
const pipe = require('../index').load(opts);
const tap = require('tap');

tap.test('it adds stdin to process.argv', (t) => {
  t.equal(process.argv.length, 3, 'process.argv with 3 elements');
  t.equal(process.argv[2], 'command', 'process.argv without piped arg');
  t.end();
});

