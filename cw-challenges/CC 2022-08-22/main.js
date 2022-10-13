// This kata is from check py.checkio.org

// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

//P(arameters)
//  array (postive numbers only)
//  n positive number
//R(eturns)
//  integer
//E(xamples)
//  array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
//  array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
//P(seudo Code)
//  1.) When array and n are given
//  2.) Find array element at index n
//  3.) Return result of element to n power

const index = (array, n) => (array.length - 1 < n) ? - 1 : Math.pow(array[n], n)