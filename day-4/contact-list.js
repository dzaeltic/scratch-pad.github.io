// #!/usr/bin/env node

'use strict';

/**
 * Create a factory function called `makeContact` that takes in `id`, `nameFirst`, and `nameLast`.
 * This function should returns a contact object.
 *
 * ex: makeContact(0, 'Max', 'Gaudin') // => { id: 0, nameFirst: 'Max', nameLast: 'Gaudin' }
 *
 */

function makeContact(id, nameFirst, nameLast) {
  // Solve this function first

//return an object with specified key values
  return {
  id: id,
  nameFirst: nameFirst,
  nameLast: nameLast
};

}

var contacts = [
  {
    id: 1,
    nameFirst: 'Max',
    nameLast: 'Gaudin',
  },
  {
    id: 2,
    nameFirst: 'John',
    nameLast: 'Fraboni',
  },
  {
    id: 3,
    nameFirst: 'Alon',
    nameLast: 'Robinson',
  },
  {
    id: 4,
    nameFirst: 'Mykia',
    nameLast: 'Smith',
  },
  {
    id: 5,
    nameFirst: 'Alice',
    nameLast: 'Green',
  },
];

/**
 * Create a function called `findContact` that takes in an array of contact objects and a
 * fullName (ex: "Max Gaudin"). This function should return the contact object in the array
 * that matches the `fullName` input, or it should returned undefined if no object is found
 * matching.
 */

function findContact(array, fullName) {
  // YOUR CODE HERE
  //loop thru array 
  for (let i = 0; i < array.length; i++) {
    //check if full name matches current contact, and return if true
    if (fullName === array[i].nameFirst + ' ' + array[i].nameLast) {
      return array[i];
    }
      
  } 
//return undefined if user can't be found in database
return undefined;
}

/**
 * Create a function called `removeContact` that takes in an array of contact objects and a
 * contact object to remove. This function search through the array and remove the contact object
 * if found.
 */
function removeContact(array, contact) {
  // YOUR CODE HERE
 
//loop thru array
for (let i = 0; i < array.length; i++) {
  //if current user is specified contact, delete

  if (contact.id == array[i].id) {
    array.splice(i, 1);
  }
}
  return array;
}

/**
 * Create a function called `getNamesThatBeginWithLetter` that takes in an array of contact objects.
 * This function should iterate through the array and return a new array of all of the contact
 * objects whose first names begin with input letter
 */
function getNamesThatBeginWithLetter(array, letter) {
  // YOUR CODE HERE
//make storage array
let arr = [];
//loop thru input array
for (let i = 0; i < array.length; i++) {
  //if the current contact starts with letter, push into storage
  if (array[i].nameFirst[0].toLowerCase() === letter.toLowerCase()) {
    arr.push(array[i]);
  }
}
//return
return arr;



}

/**
 * Create a function called `getAllContactNames` that takes in an array of contact objects.
 * This function should return a string of each object's full name followed by a linebreak character.
 *
 * example:
 *
 *    getAllContactNames(contacts); // => 'Max Gaudin\nJohn Fabroni\nAlon robinson\nMykia Smith\Alice Green'
 */
function getAllContactNames(array) {
  // YOUR CODE HERE
//make storage string
let str = '';
//loop thru contact array
  for (let i = 0; i < array.length; i++) {
    //if last contact, don't add line break
    if (i === array.length - 1) {
      str += array[i].nameFirst + ' ' + array[i].nameLast;
    } else {
    //add contact's full name and line break otherwise
    str += array[i].nameFirst + ' ' + array[i].nameLast + '\n';
    }
  }

return str;
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.makeContact = makeContact;
  module.exports.makeContactList = makeContactList;
}
