// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

//P(arameters)
//  array of ones and zeros
//R(eturns)
//  integer
//E(xamples)
//  Testing: [0, 0, 0, 1] ==> 1
//  Testing: [0, 0, 1, 0] ==> 2
//  Testing: [0, 1, 0, 1] ==> 5
//  Testing: [1, 0, 0, 1] ==> 9
//  Testing: [0, 0, 1, 0] ==> 2
//  Testing: [0, 1, 1, 0] ==> 6
//  Testing: [1, 1, 1, 1] ==> 15
//  Testing: [1, 0, 1, 1] ==> 11
//P(seudo code)
//  1.) When an array of 1's and 0's is given
//  2.) Combine elements in to a string
//  3.) Convert to integer
//  4.) Return integer

const binaryArrayToNumber = arr => {
    return parseInt(arr.map(item => item.toString()).join(''), 2)
}