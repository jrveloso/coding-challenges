// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.
// The input array will always contain only positive numbers, and will never be empty or null.

//P(arameters)
//  array 
//R(eturns)
//  array
//E(xamples)
//  [4,3,9,7,2,1] -> [2,9,3,49,4,1]
//P(seudo Code)
//  1.) When given an array of numbers
//  2.) If number has a square root return this
//  3.) Else return number squared

const squareOrSquareRoot = array => array.map(number => Math.sqrt(number) % 1 === 0 || Math.sqrt(number) % 1 === 1 ? Math.sqrt(number) : Math.pow(number, 2))