// This time no story, no theory. The examples below show you how to write function accum:
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//P(arameters)
//  string with letter a-z and A-Z
//R(eturns)
//  - between each letter, each successively starting with a capital and repeating same times as it's position in the string
//E(xamples)
//  accum("abcd") -> "A-Bb-Ccc-Dddd"
//  accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//  accum("cwAt") -> "C-Ww-Aaa-Tttt"
//P(seudo Code)
//  1.) When string is entered
//  2.) Split into individual letters
//  3.) Change each to Uppercase
//  4.) Add lowercase to end of each element based on it's position
//  5.) Join by hyphen
//  6.) Return string

function accum(s) {
	s = s.split("").map(letter => letter.toUpperCase()).map((letter, index) => {
        let finalLetters = letter.toUpperCase()
        for(let i = 0; i < index; i++) {
            finalLetters += letter.toLowerCase()
        }
        return finalLetters
    })
    return s.join("-")
}
