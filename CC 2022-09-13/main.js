// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//P(arameters)
//  array
//R(eturns)
//  modified array
//E(xamples)
//  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
//P(seudo Code)
//  1.) When given an array
//  2.) If element is 0
//  3.) Remove and add to end
//  4.) Repeat through entire array
//  5.) Return modified array

const moveZeros = arr => arr.filter((el) => el !== 0).concat(arr.filter((el) => el === 0))