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

function mostFreq(nums, k) {
    const obj = {}
    const results = []

    for(let num of nums) {
        obj[num] ? obj[num]++ : obj[num] = 1
    }

    let values = Object.values(obj).sort((a,b) => b - a).slice(0, k)

    for(let key in obj) {
        if(values.includes(obj[key])) {
            results.push(Number(key))
        }
    }
    return results

}
// What did I forget?
// return took me out of the for of loop when using the ternary operator
// pushing the key to the results array gave me a string because that's the data type a key is -> had to convert to number
// Overall
// Created an object to cache the number of appearances a number made in the array
// Created a variable of the object's values -> sorted it from highest to lowest -> took values up to k because that's what we want to return 
// looped the obj -> checked if values held the current key's number of appearances -> pushed to results if it did
// return results array

// How to improve?
// kill the for in once results.length === k

// What to remember
// Object and it's methods
// keys are strings
// ternary doesn't need return keyword when looping

console.log(mostFreq([1,1,1,2,2,3], 2), [1,2])
console.log(mostFreq([1], 1), [1])