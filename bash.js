// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
const { pwdCmd } = require('./pwd');

pwdCmd();
