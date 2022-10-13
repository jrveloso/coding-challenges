// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.


//P(arameters)
//  number
//R(eturns)
//  integer
//E(xamples)
//  1.08 --> 30
//P(seudo Code)
//  1.) When a number for kph is entered into the function
//  2.) Convert to centimeters per sec
//  3.) Return converted value

const cockroachSpeed = s => Math.floor(s * 27.777778)