// Given an array of integers, return a new array with each value doubled.

//P(arameters)
//  x for array
//R(eturns)
//  new array with x's values doubled
//E(xamples)
//  [1, 2, 3] --> [2, 4, 6]
//P(seudo Code)
//  1.) When a user enters an array into function
//  2.) Make a new array with values doubled
//  3.) Return new array

function maps(x){
    return x.map(value => value * 2)
}

console.log(maps([2, 5, 10, 3, 4]))