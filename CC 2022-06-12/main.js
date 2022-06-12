// Write a function that returns both the minimum and maximum number of the given list/array.

//P(arameters)
//  array
//R(eturns)
//  min and max
//E(xamples)
//  [1,2,3,4,5] --> [1,5]
//  [2334454,5] --> [5, 2334454]
//  [1] --> [1, 1]
//P(seudo Code)
//  1.) When array is entered
//  2.) Sort array into ascending order
//  3.) Remove and return first and last element 

function minMax(arr) {
    let newArr = arr.sort(function(a,b) {return a-b});
    return [newArr[0], newArr[newArr.length-1]];
  }

  minMax([1, 2, 3, 4, 5, 6])