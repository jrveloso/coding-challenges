// Given an array of integers , Find the Nth smallest element in this array of integers.

// array, n:integer -> integer
// [1, 4, 2, 5], 2 -> 2
// [8, 4, 5, 1], 4 -> 8

// sort array
// return element[n - 1]

function nthSmallest(arr, n) {
    return arr.sort((a,b) => a - b)[n - 1]
}

console.log(nthSmallest([1, 4, 2, 5], 2), 2)
console.log(nthSmallest([8, 4, 5, 1], 4), 8)