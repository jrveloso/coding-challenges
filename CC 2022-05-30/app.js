// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//P(arameters)
//  string
//R(eturns)
//  new string reversed
//E(xamples)
//  "This is an example!" ==> "sihT si na !elpmaxe"
//  "double  spaces"      ==> "elbuod  secaps"
//P(seudo Code)
//  1.) Enter string
//  2.) Reverse string, spaces kept
//  3.) Return reversed string


let reverseWords = str => {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))