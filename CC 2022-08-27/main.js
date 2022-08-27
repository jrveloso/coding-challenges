// Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

//P(arameters)
//  string
//R(eturns)
//  string with letter's replaced by number position in alphabet
//E(xamples)
//  alphabetPosition("The sunset sets at twelve o' clock.") --> "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
//P(seudo Code)
//  1.) When given a string
//  2.) Create an array of all letters in alphabet
//  3.) Split string into array
//  4.) Iterate through string array
//  5.) Check if character array includes letter in string array
//  6.) Return index + 1
//  7.) Join array
//  8.) Return array

function alphabetPosition(text) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

   return text
            .split("")
            .map((char, index) => {
                if(alphabet.includes(char.toLowerCase())) {
                    return alphabet.indexOf(char.toLowerCase()) + 1
            }
            }).filter(element => !isNaN(element))
            .join(" ")
}

console.log(alphabetPosition("The sunset sets at twelve o' clock"))