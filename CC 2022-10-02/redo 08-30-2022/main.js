// Simple, remove the spaces from the string, then return the resultant string.

//P(arameters)
//  string
//R(eturns)
//  string without " "
//E(xamples)
//  
//P(seudo Code)
//  1.) When given a string
//  2.) Split string into array
//  3.) Filter every character that's not a " "
//  4.) Join array and return 

const noSpace = str => str.split(" ").join("")
