// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

// Get an array -> integer
// [1,2,3,4,5,6,7,8,9], [3,2,4,6,7,8,1,9] -> 5
// [9,8,7,6,5], [5,8,6,7] -> 9
// [1,2,3], [2,3,1] -> 0
// Will always be two arrays with integers

// if num.length === mixedNums.length -> 0
// Reduce both arrays
// Return difference

function findDeletedNum(nums, mixedNums) {
    if(nums.length === mixedNums.length) {
        return 0
    }

    let reducedNums = nums.reduce((a,b) => a + b, 0)
    let reducedMixedNums = mixedNums.reduce((a,b) => a + b, 0)

    return reducedNums - reducedMixedNums
}


console.log(findDeletedNum([1,2,3,4,5,6,7,8,9], [3,2,4,6,7,8,1,9]), 5)
console.log(findDeletedNum([9,8,7,6,5], [5,8,6,7]), 9)
console.log(findDeletedNum([1,2,3], [2,3,1]), 0)