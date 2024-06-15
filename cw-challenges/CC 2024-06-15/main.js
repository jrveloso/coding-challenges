// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 
// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// given array of nums
// sort array
// declare results array
// iterate using 3 pointers ijk
// for loop
// i = first element, j next element, k last element
// while loop -> (j < k)
// total all elements
// if === 0, push to results
// if < 0, j++
// if > 0, k--

const threeSum = (nums) => {
    nums = nums.sort((a,b) => a - b)
    let results = []

    for(let i = 0; i < nums.length - 2; i++) {
        let j = i + 1
        let k = nums.length - 1
        if(nums[i] === nums[i - 1]) {
            continue
        }

        while(j < k) {
            let sum = nums[i] + nums[j] + nums[k]

            if(sum > 0) {
                k--
            } else if(sum < 0) {
                j++
            } else {
                results.push([nums[i], nums[j], nums[k]])
                j++
                while(nums[j] === nums[j - 1] && j < k) {
                    j++
                }
            }
        }
    }
    return results
}

console.log(threeSum([-1,0,1,2,-1,-4]), [[-1,-1,2],[-1,0,1]])
console.log(threeSum([0,1,1]), [])
console.log(threeSum([0,0,0]), [[0,0,0]])