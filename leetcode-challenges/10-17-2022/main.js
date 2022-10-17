// [1,2,3,1] -> true
// [1,2,3,4] -> false
// [1,1,1,3,3,4,3,2,4,2] -> true

var containsDuplicate = function(nums) {
    //Check the array for duplicate values
    //Loop
    let boolean = false
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(i !== j && nums[i] === nums[j]) {
                boolean = true
                break
            }
        }
    }
    return boolean
    //Compare each elements
    //If there's more than one occurrence, return true
    //else return false
};