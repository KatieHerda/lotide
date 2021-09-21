const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(arrayOne, arrayTwo) {
  //If length of both arrays is not equal, then you don't even have to pusue anything further.

  if (Array.isArray(arrayOne) !== Array.isArray(arrayTwo)) {

  }   //**** Should if both arguments are arrays first as a check???

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

// Function that will take in two objects and returns true or false, based on a perfect match.

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  //console.log("Obj1 keys :", Object.keys(object1))
  //console.log("Obj2 keys: ", Object.keys(object2))
  //console.log(Object.values(object1))
  //console.log(Object.values(object2))

  //Do both objects have the same number of properties (keys)?
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }

  //Loop over one of the object keys and compare to the second object
  for (const key of Object.keys(object1)) {
    //console.log("These are the keys:, ", key)

    if (Array.isArray(object1[key]) !== Array.isArray(object2[key])) {  //Are they the same type of array for comparison?
      return false;
    } 
    
    if (Array.isArray(object1[key]) === true) {
      if (eqArrays(object1[key], object2[key]) !== true) {
        return false;
      }
    } else {
      //Do both objects NOT have identical values?
      if (object1[key] !== object2[key]) {
        return false;
      } 
    }
  }
  return true;
};

const cd = { c: "1", d: ["2", 3]}; 
const dc = { d: ["2", 3], c: "1" }; 
assertEqual(eqObjects(cd, dc), true); 


const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
assertEqual(eqObjects(ab, ba), true) // => true;


const abc = { a: "1", b: "2", c: "3"}
assertEqual(eqObjects(ab, abc), false); // => false



const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;