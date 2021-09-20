const assertArraysEqual = require('./assertArraysEqual')

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([], []);
assertArraysEqual(['hello', 'my', 'friend'], ['hello', 'my', 'friend']);