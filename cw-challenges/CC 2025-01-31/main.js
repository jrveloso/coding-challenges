// Write a function which get's an array and an element and returns a array with this element at the end

// array -> array, element
// always get both array, element

// [1,2,3], 4 -> [1,2,3,4]
// ["a", 4, 56 ], 0 -> [ "a", 4, 56, 0 ]
// [], 'b' -> [b]

// return a via spread operator, add element to end

function push(a, e) {
    return [...a, e]
}

console.log(push([1,2,3], 4), [1,2,3,4])
console.log(push(["a", 4, 56 ], 0), [ "a", 4, 56, 0 ])
console.log(push([], 'b'), ['b'])