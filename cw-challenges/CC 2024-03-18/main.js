// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  const obj = {};
  let answer

  for (let num of numbers) {
    obj[num] === undefined ? obj[num] = 1 : obj[num]++
  }

  for (let value in obj) {
    if (obj[value] === 1) {
      answer = Number(value);
    }
  }
  return answer
}


console.log(stray([1, 1, 2]), 2);
console.log(stray([1, 2, 1]), 2);
console.log(stray([2, 1, 1]), 2);
