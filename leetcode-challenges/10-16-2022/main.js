// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


//P(arameters)
//  2 strings
//R(eturns)
//  boolean
//E(xamples)
//  Example 1:
//      Input: s = "anagram", t = "nagaram"
//      Output: true
//  Example 2:
//      Input: s = "rat", t = "car"
//      Output: false
//P(seudo Code)
//  Below

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


 const isAnagram = function(s, t) {
    //split string
    //sort string
    s = s.split("").sort().join("")
    t = t.split("").sort().join("")
    //if string is equal return true
    //return false
    return s === t ? true : false
};