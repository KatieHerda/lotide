// Function that will take in two objects and returns true or false, based on a perfect match.
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) !== Array.isArray(object2[key])) {
      return false;
    }
    if (Array.isArray(object1[key]) === true) {
      if (eqArrays(object1[key], object2[key]) !== true) {
        return false;
      }
    } else {
      
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
 
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


//assertObjectsEqual({a: 1, b: 3}, {b: 3, a:1}) // ==> pass
//assertObjectsEqual({a: 1, b: 3, c: 6}, {b: 3, a:1}) // ==> fail
