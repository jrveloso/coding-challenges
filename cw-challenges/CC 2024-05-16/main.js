// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// array of strings
// string

// create variable to store final string
// loop strs .every() -> check if every first letter matches
// if it does, push to the final string
// else return final string
// continue until .every() is false

const longestCommonPrefix = (strs) => {
  let prefix = "";
  if (strs.length === 0) {
    return prefix;
  }
  if (strs.length < 2) {
    prefix = prefix + strs[0]
    return prefix
  }
  let commonPrefix = true;
  let letter = 0;

  while (commonPrefix) {
    commonPrefix = strs.every((word, i) => {
        if(word[letter] === undefined) {
            return false
        } else {
            return word[letter] === strs[0][letter]
        }
    });
    if (commonPrefix) {
      prefix = prefix + strs[0][letter];
    } else {
      break;
    }
    letter++;
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "");
console.log(longestCommonPrefix(["a"]), "a");
console.log(longestCommonPrefix([""]), "");
console.log(longestCommonPrefix(["", ""]), "");

