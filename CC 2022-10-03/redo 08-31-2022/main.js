// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

//P(aramters)
//  string
//R(eturns)
//  string with - or _ delimiters
//E(xamples)
//  "the-stealth-warrior" gets converted to "theStealthWarrior"
//  "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//P(seudo Code)
//  1.) When given a string
//  2.) Split string
//  3.) Check if it contains -
//  4.) If so replace all "-"
//  5.) Else if it contains _
//  6.) If so replace all "_"
//  7.) Join and return string

function toCamelCase(str){
    if(str.includes("-")) {
        return str.split("-")
                  .map((word, i ) => i > 0  ? word.charAt(0).toUpperCase() + word.slice(1) : word)
                  .join("")
    } else if(str.includes("_")) {
        return str.split("_")
                  .map((word, i ) => i > 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
                  .join("")
    } else {
        return str
    }
}
console.log("Hi")
console.log(toCamelCase("the-stealth-warrior"))