// Task

// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// Example

// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

// array, function -> boolean
// loop arr -> if .every returns true, return true, else false
// if empty -> return true


function all(arr, fun) {
  if(arr.length === 0) {
    return true
  }
  return arr.every(el => fun(el) === true)
}

console.log(all([1,2,3,4,5], function(v){return v<9}), true)
console.log(all([1,2,3,4,5], function(v){return v>9}), false)