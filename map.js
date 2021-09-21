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
}

const words = ["ground", "control", "to", "major", "tom"];

// returns a new array based on the results of the callback function.
const map = function(array, cb) {
  const results = [];
  for (let element of array) {
    results.push(cb(element));
  }
  return results;
}

const results1 = map(words, word => word[0]);

console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

module.exports = map;