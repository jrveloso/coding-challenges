// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

//P(arameters)
//  n
//R(eturns)
//  true or false
//E(xamples)
//  -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
//  25  =>  true
//  26  =>  false
//P(seudo Code)
//  1.) When n is provided
//  2.) Divide by itself and check for remainder
//  3.) If no remainder, return true
//  4.) If there is a remainder, return false

const isSquare = n => Number.isInteger(Math.sqrt(n))