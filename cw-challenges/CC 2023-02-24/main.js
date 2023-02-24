// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

function longestConsecEl(arr) {
  if (arr.length === 0) return 0;
  let count = 0;
  max = 1;
  arr.sort((a, b) => a - b);
  console.log(arr);

  // loop -> checks if element is consecutive, equal, or sets count to 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === 1) {
      // if current element and previous difference are consec, increment count
      count = count + 1;
      // set max to 1 occurence or count
      max = Math.max(max, count);
      console.log("if", arr[i] - arr[i - 1], count, max);
    } else if (arr[i] === arr[i - 1]) {
      // next iteration if current element and one below it are equal
      console.log("else if", arr[i] === arr[i - 1], count, max);
      continue;
    } else {
      // set/reset count to 1
      count = 1;
      console.log("else", count);
    }
  }
  return max;
}

console.log(longestConsecEl([100, 4, 200, 1, 3, 2]), 4);
console.log(longestConsecEl([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
