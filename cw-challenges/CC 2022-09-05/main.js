// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

//P(arameters)
//  array of integers
//R(eturns)
//  array, first element is sum of positive numbers, send el is sum of negative
//  OR empty array
//E(xamples)
//  For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
//P(seudo Code)
//  1.) When given an array of integers
//  2.) Filter positive nums and negative nums separately
//  3.) Reduce into single value
//  4.) Return array

function countPositivesSumNegatives(input) {
    return (!input || (input.filter(num => num > 0).length === 0 && input.filter(num => num < 0).reduce((sum, curr) => sum + curr, 0) === 0)) ? [] : [input.filter(num => num > 0).length, input.filter(num => num < 0).reduce((sum, curr) => sum + curr, 0)]
}
