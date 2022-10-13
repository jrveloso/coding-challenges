//  1 solution for each input
//  no same elements
//  answer can be returned in any order
//  will the inputs always be positive? 
//  will there ever an empty input?
//  no funny business 

// The indices of the two nums sum == target


let twoSum = function(nums, target) {
    //loop within loop
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(nums[i] + nums[j] === target && i !== j) {
                return [i, j]
            }
        }
    }
    //conditional
    //return array of the indices
};

console.log(twoSum([2, 7, 11, 15], 9), [0, 1])
console.log(twoSum([3, 2, 4], 6), [1, 2])
console.log(twoSum([3, 3], 6), [0, 1])