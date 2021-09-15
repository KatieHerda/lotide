const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }

};

//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

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


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false