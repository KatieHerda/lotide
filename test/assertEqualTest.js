const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp"); // => fail
assertEqual(1, 1); // => pass
assertEqual("hello", "hello"); // => pass
assertEqual(0, false); // => fail