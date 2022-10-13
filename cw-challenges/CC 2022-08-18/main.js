// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


//P(arameters)
// string - containing letters in the alphabet, can contain special characters or numbers  
//R(eturns)
//  string - Each letter replaced with the letter 13 letters after it, respecting casing. If special character or number, return as is
//E(xamples)
//  "test" ---> "grfg"
//  "Test" ---> "Grfg"
//P(seudo Code)
//  1.) When a string is provided
//  2.) Declare an array of the alphabet
//  3.) Split the string into an array
//  4.) Loop (map) through array elements
//  5.) If element matches letter existing in alphabet array 
//  6.) Find letter in alphabet array 13 indexes after the match
//  7.) If element was uppercase, return found letter uppercase
//  8.) Else if lowercase, return letter lowercase
//  9.) If element does not match any letter in alphabet
//  10.) Return that element unchanged
//  11.) Rejoin string array
//  12.) Return string

function rot13(message){
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    return message.split("").map(element => {
        if(alphabet.includes(element.toLowerCase())) {
            let position = alphabet.indexOf(element.toLowerCase()) + 13
            if(position > 25) {
                position -= 25
                if(element === element.toUpperCase()) {
                    return element = alphabet[position - 1].toUpperCase()
                }
                return element = alphabet[position - 1]
            } else {
                if(element === element.toUpperCase()) {
                    return element = alphabet[position].toUpperCase()
                }
                return element = alphabet[position]
            }
        } else {
            return element
        }
        
    }).join("")
}