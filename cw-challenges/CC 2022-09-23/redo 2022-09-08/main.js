// You get an array of numbers, return the sum of all of the positives ones.
// Note: if there is nothing to sum, the sum is default to 0.

//P(arameters)
//  array
//R(eturns)
//  sum of all positive array elements
//E(xamples)
//  Example [1,-4,7,12] => 1 + 7 + 12 = 20
//P(seudo Code)
//  1.) When given an array of numbers
//  2.) Filter positive numbers
//  3.) Reduce
//  4.) Return result

const positiveSum = arr => arr.length > 0 ? arr.filter(num => num > 0).reduce((sum, curr) => sum + curr, 0) : 0