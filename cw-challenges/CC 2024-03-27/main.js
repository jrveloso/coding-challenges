// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples

// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

// array -> return array with n elements

// default n === 1
// filter -> if i < n + 1

function first(arr, n = 1) {
  return arr.filter((char, i) => {
    if (n !== 1 && i < n) {
      return char;
    } 
    if(i < n) {
        return char
    }
  });
}

console.log(first(["a", "b", "c", "d", "e"]), ["a"]);
console.log(first(["a", "b", "c", "d", "e"], 2), ["a", "b"]);
