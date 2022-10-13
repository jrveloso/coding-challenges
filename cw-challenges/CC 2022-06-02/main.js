// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

//P(arameters)
//  array
//R(eturns)
//  number or null
//E(xamples)
//  [1,2,3,4,6,7,8] ==> 6
//P(seudo Code)
//  1.) When given an array
//  2.) Iterate through and check if following is current incremented
//  3.) If all pass return null
//  4.) Else return number

function firstNonConsecutive (arr) {
    let result = null
    for(let i = 0; i < arr.length; i++) {
        if(arr[i + 1] - arr[i] > 1) {
            result = arr[i + 1]
            break
        }
    }
    return result
}
