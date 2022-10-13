// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// P(arameters)
//  num
// R(eturns)
//  sum
// E(xamples)
//  summation(2) -> 3
//  1 + 2
//  summation(8) -> 36
//  1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
// P(seudo Code)
//  When num is given
//  Add every number from 1 to num into a variable
//  Return variable

function summation(num) {
    let sum = 0
    for(let i = 1; i <= num; i++) {
      sum += i
    }
    return sum
  }