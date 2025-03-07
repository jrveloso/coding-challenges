// Write a function which can concatenate 2 arrays

// [1, 2, 3, 4 ], [ 5, 4, 3, 2, 1] -> [1,2,3,4,5,4,3,2,1]
// [], [1] -> [1]
// [], [] -> []

function concatenate(a1, a2) {
    // return a1.concat(a2)
    return [...a1, ...a2]
}

console.log(concatenate([1, 2, 3, 4 ], [ 5, 4, 3, 2, 1]), [1,2,3,4,5,4,3,2,1])
console.log(concatenate([], [1]), [1])
console.log(concatenate([], []), [])