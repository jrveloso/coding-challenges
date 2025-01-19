// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. Order of elements may be changed. Then return the number of elements ni nums which are not equal to val

//Consider the number of elementsin nums which are not equal to val be k, to get accepted, you ned to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not importnat as well as the size of nums
// Return k

// array, integer -> integer
// [3,2,2,3], 3 -> 2, [2,2,_, _]

// create index val 0
// loop through nums
// if current num does not equal val, assign nums[index] to current num
// increment index
// This moves any num that doesn't equal val in place forward
// index keeps track of the number of nums not equal to val

function removeElement(nums, val) {
    let index = 0

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[index] = nums[i]
            index++
        }
    }
    return index
}

console.log(removeElement([3,2,2,3], 3), 2)