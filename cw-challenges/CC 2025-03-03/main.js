// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

// sort the array
// create max variable and count variable
// loop through
// if the difference between current and previous element is 1 -> increment count and find set the max to count or max
// else if they are equal -> set count to 0
// return max

function longestSequence(nums) {
    if(nums.length === 0) {
        return 0
    }

    nums.sort((a,b) => a - b)
    let max = 1
    let count = 1
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] - nums[i - 1] === 1) {
            count += 1
            max = Math.max(max, count)
        } else if(nums[i] === nums[i - 1]) {
            continue
        } else {
            count = 1
        }
    }
    return max
}

console.log(longestSequence([100,4,200,1,3,2]), 4)
console.log(longestSequence([0,3,7,2,5,8,4,6,0,1]), 9)