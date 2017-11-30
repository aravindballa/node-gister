'use strict';

var program = require('commander');

var _require = require('./logic'),
    publish = _require.publish;

program.version('0.0.1').description('A simple node package which creates GitHub Gist based on files.');

program.command('file <filename>').alias('f').description('File to upload').action(function (filename) {
  publish(filename);
});

program.parse(process.argv);