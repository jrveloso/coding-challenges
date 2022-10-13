// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

//P(arameters)
//  array of integers
//R(eturns)
//  string "odd" or "even"
//E(xamples)
//  Input: [0]
//  Output: "even"

//  Input: [0, 1, 4]
//  Output: "odd"

//  Input: [0, -1, -5]
//  Output: "even"
//P(seudo Code)
//  1.) When given an array of integers
//  2.) reduce integers to single value
//  3.) Check remainder of value
//  4.) Return even if value is 0
//  5.) Return odd if value is 1

const oddOrEven = array => (array.reduce((sum, curr) => sum + curr, 0) % 2 === 0) ? "even" : "odd"