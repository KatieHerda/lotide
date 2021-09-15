const eqArrays = function(arrayOne, arrayTwo) {
  //If length of both arrays is not equal, then you don't even have to pusue anything further.
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  //compare values in each array[i] to see if they are NOT equal.
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false; //If above cases return false, arrays are equal, return true.
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

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

assertArraysEqual((middle([1])), []); // => []
assertArraysEqual(middle([1, 2]),[]); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]