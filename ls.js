// 'files' will be an array of filename, like ['bash.js', 'pwd.js']
const fs = require('fs');

const lsCmd = () => {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join('\n'));
      process.stdout.write('prompt > ');
    }
  });
};

module.exports = { lsCmd };
