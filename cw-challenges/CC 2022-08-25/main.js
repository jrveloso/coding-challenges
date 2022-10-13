// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

//P(arameters)
//    
//R(eturns)
//  
//E(xamples)
//  
//P(seudo Code)
//  1.) When string is given
//  2.) Split by space
//  3.) loop through array
//  4.) If word is >= 5 letters
//  5.) Split word
//  6.) Reverse
//  7.) Return word


const spinWords = string => string.split(" ").map(word => word.length >= 5 ? word.split("").reverse().join("") : word).join(" ").toString()
