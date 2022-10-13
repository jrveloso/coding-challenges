// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

//P(arameters)
//  string
//R(eturns)
//  string with even indexed chars capitalized and odd indexes lower case
//E(xamples)
//  toWeirdCase( "String" ) => returns "StRiNg"
//  toWeirdCase( "Weird string case" ) => returns "WeIrD StRiNg CaSe"
//P(seudo Code)
//  1.) When given a string
//  2.) Turn every even index into uppercase
//  3.) Turn every odd index into lowercase
//  4.) Return string

function toWeirdCase(string){
    if(string.includes(" ")) {
        return string.split(" ")
                     .map((el, index) => el.split("")
                                           .map((letter, i) => i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()).join(""))
                                           .join(" ")
    } else {
        return string.split("")
                     .map((el, index) => index % 2 === 0 ? el.toUpperCase() : el.toLowerCase())
                     .join("")
    }
}
