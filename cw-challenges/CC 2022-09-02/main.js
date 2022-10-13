// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true
// 'abba' & 'bbaa' == true
// 'abba' & 'abbba' == false
// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

//P(arameters)
//  string and array of strings
//R(eturns)
//  array of all anagrams or empty array if none
//E(xamples)
//  anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
//  anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
//  anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
//P(seudo Code)
//  1.) When given a string
//  2.) Declare empty array and split string
//  3.) Iterate through each word in array
//  4.) If word matches word variable
//  5.) Put word in matches array
//  6.) Return array with any null values filtered out

function anagrams(word, words) {
    let matches = []
    word = word.split("").sort().join("")

    for(let i = 0; i < words.length; i++) {
        if(words[i].split("").sort().join("") === word) {
            matches[i] = words[i]
        }
    }
    return matches.filter(element => element !== null)
}