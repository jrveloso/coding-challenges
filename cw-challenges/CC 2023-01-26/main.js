// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// arr integers
// arr new integers -> each element = product all nums except nums[i]
// 0(n), no /

const productExceptSelf = function(nums) {
    let output = []

    // nums -> single value, setting arr to value of a each pass
    nums.reduceRight((prod, curr, i) => {
        output[i] = prod
      console.log(prod)
        return prod * curr
    }, 1)
  
    nums.reduce((prod, curr, i) => {
        output[i] *= prod
        return prod * curr
    }, 1)
    
    return output
};

console.log(productExceptSelf([1,2,3,4]), [24,12,8,6])
console.log(productExceptSelf([-1,1,0,-3,3]), [0,0,9,0,0])