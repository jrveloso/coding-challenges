// Create a method to see whether the string is ALL CAPS.

// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

//P(arameters)
//  string
//R(eturns)
//  boolean
//E(xamples)
//  "c" -> False
//  "C" -> True
//  "hello I AM DONALD" -> False
//  "HELLO I AM DONALD" -> True
//  "ACSKLDFJSgSKLDFJSKLDFJ" -> False
//  "ACSKLDFJSGSKLDFJSKLDFJ" -> True
//P(seudo Code)
//  1.) check if string is all caps
//  2.) Return true or false

String.prototype.isUpperCase = function() {
    return this == this.toUpperCase() ? true : false
}



