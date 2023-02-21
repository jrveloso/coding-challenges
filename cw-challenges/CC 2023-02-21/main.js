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

function groupAnagrams(strs) {
  // create hash map
  // loop -> sort each string and place in object
  // push to array
  const obj = {}

  for(let str of strs) {
    const anagram = str.split("").sort().join("")

    obj[anagram] ? obj[anagram].push(str) : obj[anagram] = [str]
  }
  return Object.values(obj)
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]), [["bat"],["nat","tan"],["ate","eat","tea"]])
console.log(groupAnagrams([""]), [[""]])
console.log(groupAnagrams(["a"]), [["a"]])