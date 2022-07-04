// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//P(arameters)
//  string
//R(eturns)
//  True or False
//E(xamples)
//  "The quick brown fox jumps over the lazy dog" ==> True
//P(seudo Code)
//  1.) When a string is entered
//  2.) Check if it contains a-z
//  3.) If so, return true
//  4.) If so, return false

function isPangram(string){
    string = string.toLowerCase()

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    let panagram = 0
    
    for(let i = 0; i < alphabet.length; i++) {
        if(string.includes(alphabet[i])) {
            panagram += 1
        }
    }
    return panagram === 26 ? true : false
}