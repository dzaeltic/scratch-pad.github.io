// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/**
 * Given an input Array, loop forward over the Array and print its values
 * using console.log().
 */

function printArrayValues(array) {
  // YOUR CODE HERE //
//iterate over array with for loop
for (let i = 0; i < array.length; i++) {
  //log item in console
  console.log(array[i]);
}


}

/**
 * Given an input Array, loop backwards over the Array and print its values
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE HERE //
//iterate thru array backwards
for (let i = array.length - 1; i >= 0; i--) {
  //log to console
  console.log(array[i]);
}


}

/**
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE HERE //
//create empty array to add object keys to
let arr = [];
//use for in loop to iterate over object keys
for (let key in object) {
  //push key to array
  arr.push(key);
}
//return array
return arr;

}

/**
 * Given an input Object, loop over the Object and print its keys
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE HERE //
//iterate thru keys in obj
for (let key in object) {
  //log 
  console.log(key);
}



}

/**
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE HERE //
//init storage array
let arr = [];
//iterate thru object keys
for (let key in object) {
  //push value off key to storage
  arr.push(object[key]);
}
//return it
return arr;
}

/**
 * Given an input Object, loop over the Object and print its values
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE HERE //
//iterate thru keys in obj
for (let key in object) {
  //log
  console.log(object[key]);
}



}

/**
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE HERE //
//make counting variable
let count = 0;
//iterate thru keys in object
for (let key in object) {
  //count one for each key
  count++;
}
//return number of keys
return count;

}

/**
 * Given an input Object, how might we loop over the Object IN REVERSE and
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE HERE //
//create storage array
let stArr = [];
//iterate thru object and add to storage in reverse order
for (let key in object) {
  stArr.unshift(object[key]);
}
//loop thru storage and print
for (let i = 0; i < stArr.length; i++){ 
  console.log(stArr[i]);
}
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.printArrayValues = printArrayValues;
  module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
  module.exports.printObjectValues = printObjectValues;
  module.exports.getObjectValues = getObjectValues;
  module.exports.getObjectKeys = getObjectKeys;
  module.exports.printObjectKeys = printObjectKeys;
  module.exports.getObjectLength = getObjectLength;
  module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
