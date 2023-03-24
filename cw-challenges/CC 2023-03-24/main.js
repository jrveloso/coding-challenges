// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

const topMostFreq = (arr, k) => {
  let storage = {};
  let output = [];

  for (let num of arr) {
    storage[num] = storage[num] + 1 || 1;
  }

  let values = Object.values(storage)
    .sort((a, b) => b - a)
    .slice(0, k);
  console.log(storage, values);

  for (let num in storage) {
    if (values.includes(storage[num])) {
      output.push(Number(num));
    }
  }
  return output;
};
