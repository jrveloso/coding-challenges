// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

// Constraints:

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

// pointer method
// define results array
// sort
// for loop
// establish a, b, c, d pointers
// if a < 0 OR d >= nums.length, skip
// while c is less than d
// if c is equal to c - 1, continue
// total a, b, c, d
// if equal to target, push result to results array
// if total is less than target, increment c
// if total is more than target, decrement d
// return results

const fourSum = (nums, target) => {
  let res = [];
  nums = nums.sort((a, b) => a - b);

  // set up a pointer to loop up to last possible element
  for(let a = 0; a < nums.length - 3; a++) {
    // set up b pointer to loop to last possible outcome
    for(let b = a + 1; b < nums.length - 2; b++) {
        // set up c and d pointer
        let c = b + 1
        let d = nums.length - 1
        // loop while c less than d
        while(c < d) {
            // sum total
            const total = nums[a] + nums[b] + nums[c] + nums[d]
            // push to res if sum equal to target
            if(total === target) {
                res.push([nums[a], nums[b], nums[c], nums[d]])
                // increment c if last two pointers are equal, avoiding same return in next iteration
                while(nums[c] === nums[d]) c++;
                // decrement d if last two pointers are equal, avoiding same return in next iteration
                while(nums[d] === nums[d - 1]) d--
                // increment c and decrement d to avoid unnecessary iterations where we know it will be more than target
                c++
                d--
            } else if(total < target) {
                // increment c to get a larger total
                c++
            } else {
                // decrement d to get a smaller total
                d--
            }
        }
        // increment c to avoid unneccesary iterations
        while(nums[b] === nums[b + 1]) b++
    }
    // increment a to avoide unneccesary iterations
    while(nums[a] === nums[a + 1]) a++
  }
  return res
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0), [
  [-2, -1, 1, 2],
  [-2, 0, 0, 2],
  [-1, 0, 0, 1],
]);
// console.log(fourSum([2,2,2,2,2], 8), [[2,2,2,2]])
