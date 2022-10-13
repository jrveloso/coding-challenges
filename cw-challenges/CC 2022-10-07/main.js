// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

//P(arameters)
//  string
//R(eturns)
//  string
//E(xamples)
//  "hello"     -->  "hll"
//  "codewars"  -->  "cdwrs"
//  "goodbye"   -->  "gdby"
//  "HELLO"     -->  "HELLO"
//P(seudo Code)
//  1.) When given a string
//  2) find all lowercase values
//  3.) Remove from string and return

function shortcut (string) {
    const vowels = [ "a", "e", "i", "o", "u" ]
    return string.split("").filter( letter => !vowels.includes(letter) ).join("")
}