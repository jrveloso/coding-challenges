// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// integer array -> boolean

// Given an array of integers
// loop -> check if current value indexOf is equal to lastIndexOf
// return true if value appears twice
// return false if not

function multipleValues(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
            return false
        } else {
            return true
        }
    }
}

console.log(multipleValues([1,2,3,1]))
console.log(multipleValues([1,2,3,4]))
console.log(multipleValues([1,1,1,3,3,4,3,2,4,2]))

//hash map
function containsDupes(nums) {
    let numsMap = {}
    
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]

        if(numsMap[num]) {
            return true
        } else {
            numsMap[num] = true
        }
    }
    return false
}