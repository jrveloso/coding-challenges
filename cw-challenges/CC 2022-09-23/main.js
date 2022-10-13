// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

//P(arameters)
//  array of strings
//R(eturns)
//  array of strings sorted by length
//E(xamples)
//  ["Telescopes", "Glasses", "Eyes", "Monocles"] --> ["Eyes", "Glasses", "Monocles", "Telescopes"]
//P(seudo Code)
//  1.) When given an array of strings
//  2.) Create new array of string lengths and sort
//  3.) Sort original strings

const sortByLength = array => array.map(word => [ word, word.length ])
                                   .sort((a, b) => a[1] - b[1])
                                   .map(num => num[0])
