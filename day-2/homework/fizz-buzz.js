// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
 */
function fizzBuzz() {
  // YOUR CODE HERE //
//make count var
let count = 1;
//while loop to 100!
while (count <= 100){
  //if count is divisible by three and five, print FizzBuzz
  if (count % 3 === 0 && count % 5 === 0) {
    console.log('FizzBuzz');
  } else if (count % 3 === 0) {
    //if just divisble by three, print Fizz
    console.log('Fizz');
  } else if (count % 5 === 0) {
    //if just divisble by 5, print Buzz
    console.log('Buzz');
  } else {
    //otherwise print number we are on
    console.log(count);
  }
  //increment
  count++;
}

}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.fizzBuzz = fizzBuzz;
}
