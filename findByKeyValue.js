const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }

};

//function that takes in an object and a value. Return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(objects, value) {
  //console.log("Object keys: ", Object.keys(objects))
  //console.log("object: ", objects);
  //console.log("value: ", value);

  for (const items in objects) {
    //console.log(objects[items]);
    if (value === objects[items]) {
      return items;
    }                        //else return undefined
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);