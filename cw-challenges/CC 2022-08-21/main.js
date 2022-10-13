// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//P(arameters)
//  list of strings
//R(eturns)
//  first string with "***" between each letter
//E(xamples)
//  ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"] --> 'b***i***t***c***o***i***n'
//  ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"] --> 'a***r***e'
//P(seudo Code)
//  1.) When given a list of strings
//  2.) Sort the words in the array
//  3.) Grab first word
//  4.) Split word
//  5.) Join with "***" between each letter
//  6.) Return word

function twoSort(s) {
    s = s.sort()
    return s[0].split("").join("***")
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))