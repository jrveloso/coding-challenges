// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

//P(arameters)
//  
//R(eturns)
//  
//E(xamples)
//  h = 0
//  m = 1
//  s = 1
//  result = 61000
//P(seudo Code)
//  1.) When h, m, s are entered
//  2.) Convert h, m and s into milliseconds and return sum

const past = (h, m, s) => (h * 3600000) + (m * 60000) + (s * 1000)