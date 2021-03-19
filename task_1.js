import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => {
    console.log(line.split('').reverse().join(''));
});
