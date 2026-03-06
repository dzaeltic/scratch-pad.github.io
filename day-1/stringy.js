// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

function length(string) {
  // YOUR CODE HERE //
  //return string length
  return string.length
}

/**
 * Given an input String, return a new String forced to lowercase.
 */

function toLowerCase(string) {
  // YOUR CODE HERE //
  //return string in lower case
  return string.toLowerCase();
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

function toUpperCase(string) {
  // YOUR CODE HERE //
  //return upper case string 
  return string.toUpperCase();
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: Solve this problem using a combination of split and join.
 *
 */
function toDashCase(string) {
  // YOUR CODE HERE //
  
  let arr = string.split(' ');
  //join string with dashes
  let newStr = arr.join('-');
  //makes string lower case
  return newStr.toLowerCase();

}



/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 *
 */

function beginsWith(string, char) {
  // YOUR CODE HERE //
//if first letter of string is equal to string of one letter, return true
if (string[0].toUpperCase() == char.toUpperCase()) {
  return true;
} else {
//else, return false
return false;
}
}



/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
  // YOUR CODE HERE //
 
  //if the last letter is the same as the solo char, return true
  if (string[string.length - 1].toLowerCase() === char.toLowerCase()) {
return true

} else { return false;}
}




/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
  // YOUR CODE HERE //
  //concat two strings together
  return stringOne + stringTwo;

}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
  // YOUR CODE HERE //
  //move strings to an array
  var args = Array.from(arguments);
  //join them together
 
  return args.join('');
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
  // YOUR CODE HERE //
//if string one is longer, return that one
if (stringOne.length > stringTwo.length) {
  return stringOne;
} else if (stringTwo.length > stringOne.length){
//if string two is longer, return that one
return stringTwo;

}


}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
  // YOUR CODE HERE //
//put strings in an array
  var args = Array.from(arguments);
//sort array in alphabetical order
args.sort();
//if they start with the same letter, return 0
if (args[0].toLowerCase() === args[1].toLowerCase()) {
  return 0;
} else if (args[0] === stringOne) {
//if the first item in the array is stringOne, return 1
return 1;
} else if (args[0] === stringTwo) {
//if the first item is stringTwo, return -1
return -1;
}
}

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
  // YOUR CODE HERE //
//store strings into an array
var args = Array.from(arguments);
//sort array in alphabetical order
args.sort();
//if the two strings are equal, return 0
if (args[0].toLowerCase() === args[1].toLowerCase()) {
  return 0;
} else if (args[0] === stringOne) {
//if the first item is stringOne, return -1
return -1;
} else if (args[0] === stringTwo) {
//if the first item is stringTwo, return 1
return 1;
}
}







// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.length = length;
  module.exports.toLowerCase = toLowerCase;
  module.exports.toUpperCase = toUpperCase;
  module.exports.toDashCase = toDashCase;
  module.exports.beginsWith = beginsWith;
  module.exports.endsWith = endsWith;
  module.exports.concat = concat;
  module.exports.join = join;
  module.exports.longest = longest;
  module.exports.sortAscending = sortAscending;
  module.exports.sortDescending = sortDescending;
}
