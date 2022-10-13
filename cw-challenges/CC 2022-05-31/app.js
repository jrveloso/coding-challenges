// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.
//P(arameters)
//  string
//R(eturn)
//  middle character(s) of string
//E(xamples)
//  Kata.getMiddle("test") should return "es"
//  Kata.getMiddle("testing") should return "t"
//  Kata.getMiddle("middle") should return "dd"
//  Kata.getMiddle("A") should return "A"
//P(seudo Code)
//  1.) When user enters a string
//  2.) Check if string length is odd or even
//  3.) If odd, return the middle character
//  4.) If even, return the middle 2 characters

function getMiddle(string) {
    return string.substr(Math.ceil(string.length / 2 - 1), string.length % 2 === 0 ? 2 : 1)
}

console.log(getMiddle('supermarkets'))
