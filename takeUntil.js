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

const takeUntil = function(array, callBack) {
  let newArray = [];
  for (const element of array) {
    if (callBack(element) === true) {
      return newArray;
    }
    newArray.push(element);
  }
};

//Expected Input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);