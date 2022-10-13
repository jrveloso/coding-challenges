// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

//P(arameters)
//  String of one or more words    
//R(eturns)
//  same string but words 5 or more letters reversed
//E(xamples)
//  spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
//  spinWords( "This is a test") => returns "This is a test" 
//  spinWords( "This is another test" )=> returns "This is rehtona test"
//P(seudo Code)
//  1.) When given a string
//  2.) Split by " "
//  3.) Iterate through
//  4.) If word length 5 or more
//  5.) Reverse
//  6.) Join words by " "
//  7.) Return string

const spinWords = string => string
                                .split(" ")
                                .map(word => word.length < 5 ? word : word.split("").reverse().join(""))
                                .join(" ")