// Your task is to write function factorial.

// integer -> integer
// 1 -> 1
// 4 -> 24
// 7 -> 5040

// Given n
// Multiply n by n - 1
// If n === 0 or 1, return 1
// Repeat if above is not true

function factorial(n){
    if(n < 2) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(1), 1)
console.log(factorial(4), 24)
console.log(factorial(7), 5040)