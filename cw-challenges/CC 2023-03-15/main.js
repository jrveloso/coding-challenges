// Remove all duplicates in array
// arr -> arr

// [3, 3, 3, 1, 6, 3] -> [3, 1, 6]

const removeDup = (arr) => {
    return [...new Set(arr)]
}

console.log(removeDupes([3, 3, 3, 1, 6, 3]))