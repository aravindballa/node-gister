const program = require('commander');
const {publish} = require('./logic');

program
  .version('0.0.1')
  .description('A simple node package which creates GitHub Gist based on files.');

program.command('file <filename>')
  .alias('f')
  .description('File to upload')
  .action((filename) => {
    publish(filename);
  });

program.parse(process.argv);