// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// filter by index
// reduce

function repeats(nums) {
  return nums
    .filter((num) => nums.indexOf(num) === nums.lastIndexOf(num))
    .reduce((a, c) => a + c, 0);
}

console.log(repeats([4, 5, 7, 5, 4, 8]), 15);
console.log(repeats([1, 18, 5, 5, 1, 4]), 22);
console.log(repeats([3, 4, 8, 1, 4, 1, 3, 9]), 17);
