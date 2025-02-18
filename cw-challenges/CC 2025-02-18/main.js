//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determing if a character is a duplicate

//Examples
//"din" => "((("
//"recede" => "()()()"
//"Success" => ")())())"
//"(( @" => "))(("

// map
// result variable
// loop
// if letter doesn't exist -> add with prop 1 (account for capitalization)
// else increment
// loop map
// if > 1 push ")"
// else push "("
// return result

function convertString(s) {
    const map = {}
    let result = ""

    for(let char of s) {
        if(map[char.toLowerCase()]) {
           map[char.toLowerCase()]++
        //    console.log(map)
        } else {
            map[char.toLowerCase()] = 1
        }
    }

    for(let char of s) {
        if(map[char.toLowerCase()] > 1) {
            result += ")"
        } else {
            result += "("
        }
    }
    return result
}

console.log(convertString("din"), "(((")
console.log(convertString("recede"), "()()()")
console.log(convertString("Success"), ")())())")
console.log(convertString("(( @"), "))((")