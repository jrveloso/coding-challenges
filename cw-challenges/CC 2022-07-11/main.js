// Complete the solution so that the function will break up camel casing, using a space between words.

//P(arameters)
//  string
//R(eturns)
//  string with space
//E(xamples)
//  "camelCasing"  =>  "camel Casing"
//  "identifier"   =>  "identifier"
//  ""             =>  ""
//P(seudo Code)
//  1.) When string is entered
//  2.) Check if there is a capital letter
//  3.) If no capital, return string as is
//  4.) If capital, find index of capital
//  5.) Insert space at that index
//  6.) Return string


function solution(string) {
    string = string.split('').map(function(letter) {
      if(letter === letter.toUpperCase()) {
        letter = ' ' + letter
      }
      return letter
    })
    return string.join('')
}