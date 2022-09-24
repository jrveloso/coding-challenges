// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).


//P(arameters)
//  array
//R(eturns)
//  index of element between other 2
//E(xamples)
//  gimme([2, 3, 1]) => 0
//  2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

//  gimme([5, 10, 14]) => 1
//  10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
//P(seudo Code)
//  1.) When given array
//  2.) Create copy of array
//  3.) Sort array
//  4.) Return element at index 2 from original array

function gimme (triplet) {
    const middleNum = triplet.slice().sort((a, b) => a - b)[1]
    
    return triplet.findIndex((num, index) => num === middleNum)
}