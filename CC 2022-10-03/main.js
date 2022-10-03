// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

//P(arameters)
//  string
//R(eturns)
//  All words should have first letter capitalized
//E(xamples)
//  "hello case".camelCase() => HelloCase
//  "camel case word".camelCase() => CamelCaseWord
//P(seudo Code)
//  1.) When given a string
//  2.) Capitalize each word
//  3.) Return string

String.prototype.camelCase=function(){
    return this.split(" ").map(word => word.charAt(0).toUpperCase() + word.substring(1)).join("")
}