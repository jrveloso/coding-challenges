// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 
// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

// Given array of integers and target integer -> return sum of 3
// 3 pointer solution
// if nums.length === 3, -> reduce nums and return sum
// Declare closest variable -> nums [i] + nums[i + 1] + nums[nums.length - 1]
// sort Array
// for loop and up to nums.length - 2
// 3 pointers i, j, k
// sum total
// while j < k
// if Math.abs(target - sum) <= closest -> reassign closest to sum -> j++
// else -> k--
// while j === j - 1 -> j++
// return sum


const threeSumClosest = (nums, target) => {
    if(nums.length === 3) {
        return nums.reduce((a,b) => a + b, 0)
    }
    nums = nums.sort((a,b) => a - b)
    let closest = nums[0] + nums[1] + nums[nums.length - 1]

    for(let i = 0; i < nums.length - 2; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let j = i + 1
        let k = nums.length - 1

        while(j < k) {
            let sum = nums[i] + nums[j] + nums[k]

            if(Math.abs(target - closest) > Math.abs(target - sum)) {
                closest = sum
                }
                
            if(sum < target) {
                j++
            } else {
                k--
            }
        }
    }
    return closest
}

console.log(threeSumClosest([-1,2,1,-4], 1), 2)
console.log(threeSumClosest([0,0,0], 1), 0)
console.log(threeSumClosest([1,1,1,0], -100), 2)