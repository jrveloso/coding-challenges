// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

//P(arameters)
//  list of strings
//R(eturns)
//  array of edited strings
//E(xamples)
//  [] --> []
//  ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
//P(seudo Code)
//  1.) When given array of strings
//  2.) Prepend number with colon
//  3.) Return new array

const number = array => array.map((el, i) => array[i] = `${i + 1}: ` + array[i])