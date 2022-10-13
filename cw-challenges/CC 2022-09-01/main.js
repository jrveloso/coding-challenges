// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

//P(arameters)
//  string
//R(eturns)
//  new string
//E(xamples)
//  Sam Harris => S.H
//  patrick feeney => P.F
//P(seudo Code)
//  1.)When given a string
//  2.) Split by the space
//  3.) Create new array of first letter from each word
//  4.) Return new array

const abbrevName = name => name.split(" ").map(word => word.charAt(0).toUpperCase()).join(".")