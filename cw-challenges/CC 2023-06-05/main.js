//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determing if a character is a duplicate

//Examples
//"din" => "((("
//"recede" => "()()()"
//"Success" => ")())())"
//"(( @" => "))(("

function convertString(string) {
    return string.toLowerCase().split("").map((char, i, a) => {
        return a.indexOf(char) === a.lastIndexOf(char) ? "(" : ")"
    }).join("")
}

console.log(convertString("din"), "(((")
console.log(convertString("recede"), "()()()")
console.log(convertString("Success"), ")())())")
console.log(convertString("(( @"), "))((")