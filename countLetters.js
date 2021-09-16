const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

//The function should take in a sentence (as a string) and then return a count of each of the letters in that sting.

const countLetters = function(inputString) {
  let finalCountObj = {};

  
  //loop over string characters
  for (const letter of inputString) {
    if (letter === ' ') {
      continue;
    }

    //console.log(letter)
    if (finalCountObj[letter] !== undefined) {
      finalCountObj[letter] += 1;
    } else {
      finalCountObj[letter] = 1;
    }

    //return object that has a unique character for later
    //add each number
  }
  return finalCountObj;
};

assertEqual(countLetters('KatieK')['K'], 2);
assertEqual(countLetters('lighthouse in the house')['h'], 4);


