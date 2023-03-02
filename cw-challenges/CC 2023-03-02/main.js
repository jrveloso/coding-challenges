// arr => arr
// [1, 1, 1, 4, 3, 2, 60]
// [3, 4, 1, 6, 8, 3]

const removeDuplicates = (arr) => {
    return [...new Set(arr)]
}

console.log(uniqueArr([1, 1, 1, 4, 3, 2, 60]), [1, 4, 3, 2, 60])
console.log(uniqueArr([3, 4, 1, 6, 8, 3]), [4, 1, 6, 8, 3])