// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

//P(arameters)
//  array and number
//R(eturns)
//  returns all numbers in array divisible by number
//E(xamples)
//  [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
//P(seudo Code)
//  1.) When given array and number
//  2.) Filter out all numbers divided by number
//  3.) Return array

const divisibleBy = (numbers, divisor) => numbers.filter(num => num % divisor === 0)