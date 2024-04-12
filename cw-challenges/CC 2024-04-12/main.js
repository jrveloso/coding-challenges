// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

// array, string -> integer

// Math.min
// return with index

function min(arr, toReturn) {
  let min = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i]
        }
    }

    if(toReturn === 'value') {
        return min
    }
    if(toReturn === 'index') {
        return arr.indexOf(min)
    }
}

console.log(min([1,2,3,4,5], 'value'), 1)
console.log(min([1,2,3,4,5], 'index'), 0)