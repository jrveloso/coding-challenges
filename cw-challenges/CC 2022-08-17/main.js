// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string


//P(arameters)
//  string of digits
//R(eturns)
//  string replacing digits < 5 with '0' and digits => 5 with '1' 
//E(xamples)
//  '45385593107843568' -----> '01011110001100111'
//  '509321967506747' -----> '101000111101101'
//P(seudo Code)
//  1.) When a string of digits is entered
//  2.) Split string into array
//  3.) Convert each element into a number
//  4.) if < 5 replace with '0'
//  5.) if >= 5 replace with '1'
//  6.) join string and return

const fakeBin = x => x.split("").map(digit => Number(digit) >= 5 ? '1' : '0').join("")