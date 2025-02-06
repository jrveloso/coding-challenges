// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
// For example:
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// array (integers), number -> array (integers)
// no emptys, always integers, number integers

// filter -> slice
// loop backwards -> modulus -> unshift

function lastEvenNums(array, num) {
    let results = []

    for(let i = array.length - 1; i >= 0; i--) {
        if(results.length === num) {
            break
        }

        if(array[i] % 2 === 0) {
            results.unshift(array[i])
        }
    }

    return results
}

console.log(lastEvenNums([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8])
console.log(lastEvenNums([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26])
console.log(lastEvenNums([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6])