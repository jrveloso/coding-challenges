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

// array -> boolean
// Given an array of integers
// create result variable = true
// for loop
// if num.indexOf() !== num.lastIndexOf()
// else false
// return result

function repeatElements(nums) {
    // let result = false

    // for(let i = 0; i < nums.length; i++) {
    //     if(i !== nums.lastIndexOf(nums[i])) {
    //         result = true
    //     }
    // }

    // return result
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



console.log(repeatElements([1,2,3,1]), true)
console.log(repeatElements([1,2,3,4]), false)
console.log(repeatElements([1,1,1,3,3,4,3,2,4,2]), true)