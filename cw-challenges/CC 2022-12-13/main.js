// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majorityElement(arr) {
    //create nums object
    let nums = {},
        // count = 0,
        majority = arr[0]
    //for loop -> nums object
    for(const num of arr) {
      nums[num] = nums[num] + 1 || 1
      //can add this instead of 2nd loop below. Takes up less space and time since not using count variable and no 2nd loop. makes it linear
      nums[num] > arr.length/2
    }
    //don't technically need 2nd loop below. this is quadratic
    //for in -> return occurence > arr.length / 2
    // for(const num in nums) {
    //   if(nums[num] > count) {
    //     count = nums[num]
    //     majority = num
    //   }
    // }
    return majority
  }
  
  function majorityElement(arr) {
    //logarithemic solution
    arr.sort()
    return arr[Math.floor(arr.length/2)]
  }
  
  console.log(majorityElement([3,2,3]), 3)
  console.log(majorityElement([2,2,1,1,1,2,2]), 2)