// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

function newLength(arr) {
    //map arr to show string lengths
    //reduce to find avg
    const avg = Math.round(arr.join("").length/arr.length)
    console.log(avg)
    //map -> arr lengths to avg length
    return arr.map(str => str.charAt(0).repeat(avg))
  }


console.log(newLength(['u', 'y']), ['u', 'y'])
console.log(newLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc'])