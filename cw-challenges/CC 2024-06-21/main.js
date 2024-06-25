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

    // array (n length), target -> array (each quad === target)
    // [1,0,-1,0,-2,2], 0 -> [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
    // [2,2,2,2,2], 8 -> [[2,2,2,2]]

    // pointers
    // sort array
    // declare results array

    // for loop until a.length - 4 to track a
    // declare b = a + 1, c = a + 2, d = a.length - 1
    // if c === c - 1 -> continue
    // if b === b - 1 -> continue
    // while loop b < c
    // while c < d
    // sum a b c d
    // if sum < target -> increment c
    // if sum > target -> decrement d
    // else push [a,b,c,d] to results
    // if sum < target -> increment b
    // if sum === target -> push to results
    // else continue
    // return results



    const fourSum = (nums, target) => {
        nums = nums.sort((a,b) => a - b)
        let results = []

        for(let a = 0; a < nums.length - 3; a++) {
            for(let b = a + 1; b < nums.length - 2; b++) {
                let c = b + 1
                let d = nums.length - 1

                while(c < d) {
                    const total = nums[a] + nums[b] + nums[c] + nums[d]

                    if(total === target) {
                        results.push([nums[a], nums[b], nums[c], nums[d]])

                        while(nums[c] === nums[d]) c++;

                        while(nums[d] === nums[d - 1]) d--;

                        c++
                        d--
                    } else if(total < target) {
                        c++
                    } else {
                        d--
                    }
                }
                while(nums[b] === nums[b + 1]) b++
            }
            while(nums[a] === nums[a + 1]) a++
        }
        return results
    }

    console.log(fourSum([1,0,-1,0,-2,2], 0), [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]])
    console.log(fourSum([2,2,2,2,2], 8), [[2,2,2,2]])