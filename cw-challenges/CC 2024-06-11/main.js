// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// Given nums array AND target integer
// Use two pointer strategy
// sort array
// for loop
// i = nums[0], j = nums[nums.length - 1]
// while i < j
// if i + j === nums, push i, j to results
// if sum < target, continue
// if sum > target, decrement j
// return indexes

const twoSum = (nums, target) => {
    let sorted = nums.map(num => num).sort((a,b) => a - b)
    let indices = []
    let j = nums.length - 1

    for(let i = 0; i < sorted.length; i++) {
        if(indices.length > 0) {
            break
        }

        while(i < j) {
            let sum = sorted[i] + sorted[j]
            if(sum === target) {
                let first = nums.indexOf(sorted[i])
                let second = nums.lastIndexOf(sorted[j])
                indices.push(first, second)
                break
            } else if(sum < target) {
                break
            } else {
                j--
            }
        }
    }
    return indices
};

console.log(twoSum([2,7,11,15], 9), [0,1])
console.log(twoSum([3,2,4], 6), [1,2])
console.log(twoSum([3,3], 6), [0,1])