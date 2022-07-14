// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

//P(arameters)
//  array of numbers
//R(eturns)
//  average of array elements
//E(xamples)
//  [1,1,1] => 1
//  [1,2,3]) => 2
//  [1,2,3,4]) => 2.5
//P(seudo Code)
//  1.) When an array is given
//  2.) If empty, return 0
//  3.) Else, add all array elements and divide by number of elements

const find_average = array => array.length === 0 ? 0 : array.reduce((sum, curr) => sum + curr) / (array.length)
