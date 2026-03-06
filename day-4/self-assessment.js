/*
Create a function called countGreaterThanFour that takes in an array of strings.
This function should return the number of strings in the input array that have
a length greater than 4. If the input array is not an array, return 0.

In your implementation, breakdown the IOCE in detail and pseudocode every step.

example output:

      countGreaterThanFour(['hello', 'world', 'we', 'are', 'strings']); // => 3
*/

function countGreaterThanFour(array){
//create storage string
let str = '';
      //if string length > 4, count up by one in storage. loop over array
      for (let i = 0; i < array.length; i++) {
            if(array[i].length > 4) {
                  str += 0;
            }
      }
   //return storage length
   return str.length;   

  
}
