// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//P(arameters)
//  array of numbers
//R(eturns)
//  array with odd numbers sorted and even numbers in orginial positions
//E(xamples)
//  [7, 1]  =>  [1, 7]
//  [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
//P(seudo Code)
//  1.) When given array of numbers
//  2.) Filter all odd numbers out
//  3.) Sort new odd number array
//  4.) Replace each odd number in original array with each successive number in odd array
//  5.) Return array

function sortArray(array) {
    const oddNums = array
                    .filter(num => Math.abs(num) % 2 === 1)
                    .sort((a, b) => a - b)
    return array.map(num => Math.abs(num) % 2 === 1 ? oddNums.shift() : num)
}

