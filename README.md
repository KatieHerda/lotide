# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @katieherda/lotide`

**Require it:**

`const _ = require('@katieherda/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: compares two arrays and prints whether they match or not.
* `assertEqual(actual, expected)`: compares two values and prints whether they match or not.
* `assertObjectsEqual(actual, expected)`: compares two objects and returns true or false, based on a perfect match.
* `countLetters(inputString)`: takes in a string and returns a count of each letter in that sting.
* `countOnly(allItems, itemsToCount)`: takes in a collection of items and return counts for a specific subset of those items.
* `eqArrays(arrayOne, arrayTwo)`: takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects(object1, object2)`: take in two objects and returns true or false, based on a perfect match.
* `findByKeyValue(objects, value)`: takes in an object and value. Return the first key which contains the given value. 
* `findKey(object, callBack)`: takes in an object and callback. It scans object and return the first key which the callback returns a truthy value for.
* `head(array)`: returns the first element from the array.
* `letterPositions(string)`: takes in a string and returns all the indices in the string where each character is found
* `map(array, callBack)`: returns a new array based on the results of the callback function.
* `middle(array)`: take in an array and return the middle-most element(s) of the given array.
* `tail(array)`: returns all items in an array except for the first item.
* `takeUntil(array, callBack)`: returns a slice of an array with elements taken from the beginning and elements following until the callback/predicate returns a truthy value.
* `without(array, itemsToRemove)`: returns a subset of a given array, removing unwanted elements.