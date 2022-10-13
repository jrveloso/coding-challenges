// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

//P(arameters)
//  string
//R(eturns)
//  first character not repeated
//E(xamples)
//  'stress' ---> 't'
//P(seudo Code)
//  1.) When given a string
//  2.) Check if each character is repeated within the string (including capitalized versions)
//  3.) If so, filter that charater out
//  4.) Return the first non repeating character

function firstNonRepeatingLetter(s) {
    const nonRepeats = s.split("").filter((letter, index) => {
        let doesItRepeat = false
        s.split("").forEach((el, i) => {
            if(letter.toLowerCase() === el.toLowerCase() && index !== i) {
                doesItRepeat = true
            }
        })
        return doesItRepeat === false ? letter : ""
    })
    return nonRepeats.length === 0 ? "" : nonRepeats.shift()
}
