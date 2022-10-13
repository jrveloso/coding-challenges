// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

//P(arameters)
//  n(integer), s(string)
//R(eturns)
//  string repeated n times
//E(xamples)
//  6, "I"     -> "IIIIII"
//  5, "Hello" -> "HelloHelloHelloHelloHello"
//P(seudo Code)
//  1.) When n(integer) and s(string) are provided
//  2.) Repeat string n times
//  3.) Return string

const repeatStr = (str, n) => str.repeat(n)
