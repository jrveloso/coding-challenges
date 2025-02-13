// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

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

// brute force
// create array of results starting with [ 0, 1 ]
// loop n times
// add i and i + 1 -> push result to results
// return n


function fib(n) {
    let results = [0, 1]

    for(let i = 0; i < n; i++) {
        let result = results[i] + results[i + 1]
        results.push(result)
    }
    return results[n]
}

console.log(fib(2), 1)
console.log(fib(3), 2)
console.log(fib(4), 3)