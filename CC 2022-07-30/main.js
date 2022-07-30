// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//P(arameters)
//  2 arrays
//R(eturns)
//  sum of both arrays
//E(xamples)
//  [1, 2, 3], [4, 5, 6] ==> 21
//P(seudo Code)
//  1.) When given two arrays
//  2.) concat them
//  3.) reduce to single value and return it

const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((sum, curr) => sum + curr, 0)