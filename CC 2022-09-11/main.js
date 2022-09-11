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
//  1.) Given an array of numbers
//  2.) Remove all odd numbers from array
//  3.) Sort odd number array
//  4.) Place each number into original array where odd numbers exist
//  5.) return array

function sortArray(array) {
    let oddNums = array
                    .filter(num => Math.abs(num % 2) === 1)
                    .sort((a, b) => a - b)
    let index = 0
    for(let i = 0; i < array.length; i++) {
        if(index > oddNums.length - 1) {
            break
        } else if(Math.abs(array[i] % 2) !== 0) {
            array[i] = oddNums[index]
            index++
        } 
    }
    return array
}