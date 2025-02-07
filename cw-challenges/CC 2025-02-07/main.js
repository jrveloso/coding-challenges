// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).
// How about with recursion?

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// 0, 1 -> 1

// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// 0, 1, 1 -> 2

// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
// 0, 1, 1, 2 -> 3 

//Solve problem with memoization

// n (integer) -> sum at that sequence (integer)
// memoize
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

function fib(n) {
    const memo = {}

    if(n <= 1) {
        console.log(1, n)
        return n
    } else if(memo[n]) {
        console.log(2, memo[n])
        return memo[n]
    } else {
        let result = fib(n - 1) + fib(n - 2)
        memo[n] = result
        
        console.log(3, memo[n], result, memo)
        return result
    }
}

// console.log(fib(1), 1)
// console.log(fib(3), 2)
console.log(fib(4), 3)