// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.

//P(arameters)
//  string
//R(eturns)
//  string without vowels
//E(xamples)
//  For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//P(seudo Code)
//  1.) When a string is entered into function call
//  2.) Take out all vowels
//  3.) Return string

disemvowel = str => str.replace(/[aeiou]/gi,'')
