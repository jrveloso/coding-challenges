//Retry 
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

function productExceptSelf(nums) {
    let output = [];
  
    nums.reduceRight((a,c,i) => {
      output[i] = a
  
      return a * c
    }, 1)
  
    nums.reduce((a,c,i) => {
      output[i] *= a
  
      return a * c
    }, 1)
  
    return output
  }
  
  console.log(productExceptSelf([1,2,3,4]), [24,12,8,6])
  console.log(productExceptSelf([-1,1,0,-3,3]), [0,0,9,0,0])