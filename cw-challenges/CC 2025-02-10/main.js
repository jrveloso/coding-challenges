// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).
// How about with recursion?

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

//Solve problem with memoization

// create a map
// if n <= 1 -> return n
// else if map[n] === true
// else ->
// create result variable = fib(n - 1) + fib(n - 2)
// assign result to map[n]
// return result

const map = {}

function fib(n) {
    if(n <= 1) {
        return n
    } else if(map[n]) {
        return map[n]
    } else {
        let result = fib(n - 1) + fib(n - 2)
        map[n] = result
        return result
    }
}

console.log(fib(2), 1)
console.log(fib(3), 2)
console.log(fib(4), 3)