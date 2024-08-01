// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// loop through string
// store char if it does not exist
// if it does, store string and start new one
// continute until end of string
// return longest string

const lengthOfLongestSubstring = (s) => {
  // store longest substring length
  let maxLength = 0;
  // Create set to store chars
  let charSet = new Set();
  // from
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    // if set does not have char at index i of string
    if (!charSet.has(s.charAt(right))) {
      // add char at right pointer to set
      charSet.add(s.charAt(right));
      // reassign maxLength to the highest between length of current substring and maxLength
      maxLength = Math.max(maxLength, right - left + 1);
    } else {
      //if set does contain char
      // loop while set contains the char
      while (charSet.has(s.charAt(right))) {
        // remove the char at left
        charSet.delete(s.charAt(left));
        // move left pointer up
        left++;
      }
      // add char at right pointer to set
      charSet.add(s.charAt(right));
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("c"));
console.log(lengthOfLongestSubstring("asjrgapa"));
