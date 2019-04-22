const pwdCmd = () => {
  process.stdout.write(process.cwd());
  // process.stdin.on('data', data => {
  //   const cmd = data.toString().trim(); // remove the new line

  //   if (cmd.toLowerCase() === 'pwd') {
  //     process.stdout.write(process.cwd());
  //   } else {
  //     process.stdout.write('You typed: ' + cmd);
  //   }

  //   process.stdout.write('\nprompt > ');
  // });
};

module.exports = { pwdCmd };
