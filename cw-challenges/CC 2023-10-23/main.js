// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// integers a, b -> array integers
// 1, 4 -> [1, 2, 3, 4]
// 3, 9 -> [ 3, 4, 5, 6, 7, 8, 9]
// 100, 105 -> [ 100, 101, 102, 103, 104, 105 ]

function returnAllIntegers(a, b) {
    // create array
    let nums = []
    // loop starting from a, b
    for(let i = a; i <= b; i++) {
    // add i to array
        nums.push(i)
    }
    // return array
    return nums
}

console.log(returnAllIntegers(1, 4), [1, 2, 3, 4])
console.log(returnAllIntegers(3, 9), [ 3, 4, 5, 6, 7, 8, 9])
console.log(returnAllIntegers(100, 105), [ 100, 101, 102, 103, 104, 105 ])