// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// repeats([4,5,7,5,4,8]),15)
// repeats([9, 10, 19, 13, 19, 13]),19)
// repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
// repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
// repeats([5, 10, 19, 13, 10, 13]),24)

// array of integers -> integer
// [4,5,7,5,4,8] -> 15
// [9, 10, 19, 13, 19, 13] -> 19
// [16, 0, 11, 4, 8, 16, 0, 11] -> 12

function repeats(arr) {
    // filter through array
    return arr.filter((num, i, a) => a.indexOf(num) === a.lastIndexOf(num)).reduce((a,c) => a + c, 0)
    // compare indexOf with lastIndexOf
    // if === return
}

console.log(repeats([4,5,7,5,4,8]),15)
console.log(repeats([9, 10, 19, 13, 19, 13]),19)
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)