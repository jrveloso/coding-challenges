// Complete the solution so that it reverses all of the words within the string passed in.

//P(arameters)
//  string
//R(eturns)
//  string reversed
//E(xamples)
//  "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
//P(seudo Code)
//  1.) When string is given
//  2.) Split by " "
//  3.) Reverse string
//  4.) Return

const reverseWords = str => str.split(" ").reverse().join(" ")