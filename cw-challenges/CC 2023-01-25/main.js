// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

const topKFrequent = (nums, k) => {
  //create hashmap of nums: occurence
  //create empty array
  let obj = {};
  let arr = [];

  for (let num of nums) {
    obj[num] = obj[num] + 1 || 1;
  }
  //store object values array in counts
  let counts = Object.values(obj)
    .sort((a, b) => b - a)
    .slice(0, k);

  //loop -> if counts value is in obj, push that prop into arr
  for (let num in obj) {
    if (counts.includes(obj[num])) {
      arr.push(Number(num));
    }
  }
  return arr;
};

// console.log(topKFrequent([1,1,1,2,2,3], 2), [1,2])
// console.log(topKFrequent([1], 1), [1])

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

//arr -> arr

function groupAnagrams(strs) {
  //create hash map of word combos + examples
  let obj = {};

  for (let str of strs) {
    let letters = str.split("").sort().join("");
    // console.log(str.split("").sort().join(""))

    obj[letters] ? obj[letters].push(str) : (obj[letters] = [str]);
  }
  // console.log(obj)
  return Object.values(obj);
  //return obj values
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [
  ["bat"],
  ["nat", "tan"],
  ["ate", "eat", "tea"],
]);
console.log(groupAnagrams([""]), [[""]]);
console.log(groupAnagrams(["a"]), [["a"]]);
