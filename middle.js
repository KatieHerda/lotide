//Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function(array) {
  let newArray = []; //Will hold middle values

  const midElem = Math.floor(array.length / 2); //Equation to find middle element in even array.

  for (let i = 0; i < array.length; i++) {

    if (array.length <= 2) { //Array with 1 or 2 elements
      newArray = []; //return empty array

    } else if (array.length % 2 !== 0) { //Odd numbered arrays return single middle element
      newArray = [(array[midElem])];

    } else if (array.length % 2 === 0) { //Even numbered arrays return two middle elements.
      newArray = [array[midElem - 1], array[midElem]];
    }
  }
  return newArray;
};

module.exports = middle;

