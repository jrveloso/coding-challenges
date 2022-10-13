// Given a non-empty array of integers, return the result of multiplying the values together in order.

//P(arameters)
//  array of integers
//R(eturns)
//  number
//E(xamples)
//  [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
//P(seudo Code)
//  1.) When given an array of integers
//  2.) Multiply all integers
//  3.) return value

const grow = x => x.reduce((product, curr) => product * curr)