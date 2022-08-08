// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).


//P(arameters)
//  array of numbers, target number
//R(eturns)
//  list of indexes that add up to target number
//E(xamples)
//  twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
//P(seudo Code)
//  1.) When numbers and target are provided
//  2.) Create empty array to hold indexes
//  3.) Filter through array
//  4.) If any combo adds to target number
//  5.) Return into empty array and return whole array


function twoSum(numbers, target) {
    let indexes = []
    
    numbers.forEach((number, index) => {
        numbers.forEach((secondNum, secondIndex) => {
            if(index == secondIndex) {
                return 
            } else if(number + secondNum == target) {
                indexes[0] = index
                indexes[1] = secondIndex
            }
        })
    })
    return indexes
}

twoSum([1,2,3], 4)