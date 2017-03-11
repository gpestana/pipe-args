# pipe-args

[![Build Status](https://travis-ci.org/gpestana/pipe-args.svg?branch=master)](https://travis-ci.org/gpestana/pipe-args)

![pipe](https://raw.githubusercontent.com/gpestana/pipe-args/master/mario.png)

**pipe-args adds support for unix piped arguments to your node CLI apps** 

pipe-args makes your node CLI apps to fully support unix pipelines, completely
out of the box. Require the the pipe-args module and all the piped arguments are
added to the process stdin transparently. It also integrates well with popular
command line interface/parsers like yarg and commander.js.


### Installation

```bash
$ npm install --save pipe-args
```

### Usage

```javascript
#!/usr/bin/env node

const pipe = require('pipe-args').load();
console.log(`The piped arg is ${process.argv[2]}`);
```

```bash
$ echo test | node index.js

$ The piped arg is test
```

pipe-args plays along with optstrings parsers such as yarg. The following yargs 
parser code:

```javascript
#!/usr/bin/env node

const pipe = require('pipe-args').load();
const yargs = require('yargs')

const cli = yargs.demand(1)

console.log(cli.argv);
```

parses linux-style piped arguments as expected:

```bash
$ echo piped_arg | yargs-cli.js

$ { _: [ 'piped_arg' ], '$0': 'index.js' }
```

### License:

MIT © [Gonçalo Pestana](http:/gpestana.com/)



