// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').


//P(arameters)
//  string
//R(eturns)
//  array with string split every 2 characters, if odd, add underscore
//E(xamples)
//  * 'abc' =>  ['ab', 'c_']
//  * 'abcdef' => ['ab', 'cd', 'ef']
//P(seudo Code)
//  1.) When a string is provided
//  2.) Split the string
//  3.) Check string length
//  4.) If odd, add _ to end of array
//  5.) Else map and concatenate every two letters
//  6.) return final array

function solution(str){
    str = str.split("")
    if(str.length % 2 !== 0) {
     str.push("_")
    }
     return str.map((letter, index) => letter + str[index + 1]).filter((element, index) => index % 2 === 0)
}