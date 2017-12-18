const yargs = require('yargs');

const operations = require('./operations.js');

const argv = yargs.argv;
var command = argv._[0];
var digit1 = argv._[1];
var digit2 = argv._[2];

if(command === 'help'){
  console.log('Enter 2 numbers separated by a space. Precede these numbers by one of the following commands:')
  console.log('add');
  console.log('subtract');
  console.log('multiply');
  console.log('divide');
} else if (command === 'add') {
  console.log(`${digit1} + ${digit2} = ${operations.add(digit1, digit2)}`);
} else if (command === 'subtract') {
  console.log(`${digit1} - ${digit2} = ${operations.subtract(digit1, digit2)}`);
} else if (command === 'multiply') {
  console.log(`${digit1} x ${digit2} = ${operations.multiply(digit1, digit2)}`);
} else if (command === 'divide') {
  console.log(`${digit1} / ${digit2} = ${operations.divide(digit1, digit2)}`);
} else {
  console.log('Command not recognized.');
  console.log('Enter "help" for a list of available commands');
}
