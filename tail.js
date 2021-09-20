const assertEqual = require('./assertEqual')


//Function that returns the "tail" of an array: everything except for the first item (head) of the provided array.

//Function that returns a new array using slice
const tail = function(array) {
  if(array.length <= 1) {
    return [];
  }
  return array.slice(1);
}

//console.log(tail(["Hello", "World", "My", "Name", "Is"]))

module.exports = tail;