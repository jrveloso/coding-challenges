// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//P(arameters)
//  str
//R(eturns)
//  charRepeatStr
//E(xamples)
//  * "String"      -> "SSttrriinngg"
//  * "Hello World" -> "HHeelllloo  WWoorrlldd"
//  * "1234!_ "     -> "11223344!!__  "
//P(seudo Code)
//  1.) When a user enters a string into the function
//  2.) Split str into an array
//  3.) Loop through array, repeat the element 
//  4.) Return new string


const doubleChar = str => str.split('').map(c => c + c).join('')
