const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }

};

//Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.

//Function that returns a new array using slice
const tail = function(array) {
  console.log(array.slice(1));
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail([])); //should yield an empty array
console.log(words); //original array remains the same
