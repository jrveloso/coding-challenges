// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// arr, n: integer -> arr
// [1,2,3,4,5], 4 -> [1,2,3,4]
// [1,2], 1 -> [1]

const take = (arr, n) => arr.slice(0, n)

console.log(take([1,2,3,4,5], 4))
console.log(take([1,2], 1))
console.log(take([1,2,3,4,5], 2))
console.log(take([1,2,3,4,5], 3))