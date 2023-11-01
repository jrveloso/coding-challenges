// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// string -> string, 1x char -> (, more char -> )
// caps don't matter

function convert(string) {
    // split string and map to convert to lower case
    // indexOf and lastIndexOf
    // join string and return
    let letters = string.split("").map(char => char.toLowerCase())

    return letters.map(char => {
        if(letters.indexOf(char) === letters.lastIndexOf(char)) {
            return "("
        } else {
            return ")"
        }
    }).join("")
}

console.log(convert("din"), "(((")
console.log(convert("recede"), "()()()")
console.log(convert("Success"), ")())())")
console.log(convert("(( @"), "))((")