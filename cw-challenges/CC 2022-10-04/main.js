// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

//P(arameters)
//  two strings
//R(eturns)
//  boolean
//E(xamples)
//  "foefet" is an anagram of "toffee"
//  "Buckethead" is an anagram of "DeathCubeK"
//P(seudo Code)
//  1.) When given two strings
//  2.) Sort both
//  3.) If strings are equal return true
//  4.) Else return false

const isAnagram = function(test, original) {
    return test.split("").map(letter => letter.toLowerCase()).sort().join("") === original.split("").map(letter => letter.toLowerCase()).sort().join("") ? true : false
}
