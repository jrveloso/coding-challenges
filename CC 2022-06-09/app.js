// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
//If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

//P(arameters)
//  array
//R(eturns)
//  sum of all numbers except highest and lowest
//E(xamples)
//  { 6, 2, 1, 8, 10 } => 16
//  { 1, 1, 11, 2, 3 } => 6
//P(seudo Code)
//  1.) When array is entered
//  2.) Check if array is falsy, if so return 0
//  2.) Else, sort into ascending order
//  3.) Remove first and last element
//  4.) Add remaining elements and return sum

function sumArray(array) {
    if(array === false || array === null || array === undefined) {
      return 0
    } else {
      return array.sort((a, b) => a -b).slice(1, -1).reduce((sum, curr) => sum + curr, 0)
    }
}