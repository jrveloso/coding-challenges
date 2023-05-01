// Task

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:

// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

function minValue(values){
    return Number(Array.from(new Set(values)).sort((a,b) => a - b).join(""))
}

console.log(minValue([1, 3, 1]), 13)
console.log(minValue([4, 7, 5, 7]), 457)
console.log(minValue([4, 8, 1, 4]), 148)