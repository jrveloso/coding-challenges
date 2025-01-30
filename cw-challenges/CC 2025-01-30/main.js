// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// array of integers, integer -> array of integers
// same order, always will be integers in the given array, array.length > 0, always will have 'number' even integers

// Given array nums and number
// for loop R -> L
// if results.length === number -> break and return array
// if nums[i] is even -> unshift to result array

function lastEvenNums(nums, number) {
    let results = []

    for(let i = nums.length - 1; i >= 0; i--) {
        if(results.length === number) {
            break
        }
        if(nums[i] % 2 === 0) {
            // results.unshift(nums[i])
            results = [nums[i], ...results]
        }
    }

    return results
}

console.log(lastEvenNums([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8])
console.log(lastEvenNums([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26])
console.log(lastEvenNums([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6])