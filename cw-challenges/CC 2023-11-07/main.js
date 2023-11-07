// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// string -> string

function convert(s) {
    return s.split("").map(char => s.indexOf(char.toLowerCase()) === s.lastIndexOf(char.toLowerCase()) ? "(" : ")").join("")
}

console.log(convert("din"), "(((")
console.log(convert("recede"), "()()()")
console.log(convert("Success"), ")())())")
console.log(convert("(( @"), "))((")