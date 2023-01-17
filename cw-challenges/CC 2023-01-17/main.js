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

const groupAnagrams = function (strs) {
  //create hashmap
  let obj = {};
  // loop
  for (let str of strs) {
    // sort str
    let letters = str.split("").sort().join("");
    //  is str of letters already in hashmap?
    //  true -> push str into value arr
    //  false -> add sorted str to hashmap as key, og str as value
    obj[letters] ? obj[letters].push(str) : (obj[letters] = [str]);
  }
  //return array of obj's values
  return Object.values(obj);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [
  ["bat"],
  ["nat", "tan"],
  ["ate", "eat", "tea"],
]);
console.log(groupAnagrams([""]), [[""]]);
console.log(groupAnagrams(["a"]), [["a"]]);
