// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// array: integers, limit -> boolean

// Example: [1,2,3,4,5], 8 -> false
// Example: [1,2,3,4,5], 5 -> true

// My solution
const smallEnough = (a, limit) => a.every(num => num <= limit)

// another with spread syntax
const anotherSmallEnouth = (a, limit) => Math.max(...a) <= limit