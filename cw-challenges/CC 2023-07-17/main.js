// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// %
// filter

// array -> array
// [ 5, 6, 1, 2, 22, 13, 14] -> [ 6, 2, 22, 14 ]
// [ 2, 2, 2 ] -> [ 2, 2, 2 ]
// [ 1, 5, 3 ] -> []


// Given an array of integers
// Return a new array holding values from array that are even

function noOdds(values) {
    return values.filter(num => num % 2 === 0)
}

console.log(noOdds([ 5, 6, 1, 2, 22, 13, 14]), [ 6, 2, 22, 14 ])
console.log(noOdds([ 2, 2, 2 ]), [ 2, 2, 2 ])
console.log(noOdds([ 1, 5, 3 ]), [])