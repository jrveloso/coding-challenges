// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

//P(arameters)
//  array of integers as strings and numbers
//R(eturns)
//  sum of array values if they were all numbers
//E(xamples)
//  [9, 3, '7', '3'] ==> 22
//P(seudo Code)
//  1.) When given an array of integers
//  2.) Convert all to number type
//  3.) Return sum

const sumMix = x => x
                    .map(num => Number(num))
                    .reduce((sum, curr) => sum + curr, 0)