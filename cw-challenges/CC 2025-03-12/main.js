// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// array, k -> array
// create obj and results array
// loop array -> if obj[num] -> increment
// else -> obj[num] = 1
// for in loop -> 

function mostFrequent(nums, k) {
    let obj = {}
    let arr = []

    for(let num of nums) {
        obj[num] = obj[num] + 1 || 1
    }

    let values = Object.values(obj).sort((a,b) => b - a).slice(0, k)
    
    for(let num in obj) {
        if(values.includes(obj[num])) {
            arr.push(Number(num))
        }
    }
    return arr
}

console.log(mostFrequent([1,1,1,2,2,3], 2), [1,2])
console.log(mostFrequent([1], 1), [1])