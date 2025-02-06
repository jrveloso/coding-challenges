// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// ['1',2,3,4,'5']
// ['2','4']


function sum(nums) {
    return nums.reduce((a,c) => a + Number(c), 0)
}

console.log(sum(['1',2,3,4,'5']), 15)
console.log(sum(['2','4']), 6)