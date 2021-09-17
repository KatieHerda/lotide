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


//Function that takes in a sentence and returns all the indices in the string where each character is found.

const letterPositions = function(sentence) {

  const results = {}; //array to hold final result

  for (let i = 0; i < sentence.length; i++) {
  //console.log("sentence[i]: ", sentence[i]);   

    if(sentence[i] === ' ') {
      continue;
    }

    if(results[sentence[i]] !== undefined) {
      results[sentence[i]].push(i);
      //push key and value to object
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

//console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l , [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);

