// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not
// About factors
// Factors are numbers you can multiply together to get another number.
// 2 and 3 are factors of 6 because: 2 * 3 = 6
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

//P(arameters)
//  factor, base
//R(eturns)
//  true or false
//E(xamples)
//  6, 2 --> true
//P(seudo Code)
//  1.) When base and factor are entered
//  2.) If for remaineder when base/factor
//  3.) If none, return true
//  4.) Else return false

const checkForFactor = (base, factor) => base % factor === 0 ? true : false