// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

//P(arameters)
//  3 integers a, b, c
//R(eturns)
//  true or false
//E(xamples)
//  
//P(seudo Code)
//  1.) When integer values are given to a, b, and c
//  2.) If any combo of two integers are greater than c,
//  3.) Return true
//  4.) Else, false

const isTriangle = (a,b,c) => ((a + b + c)/2) > Math.max(a, b, c) ? true : false