// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//P(arameters)
//  string, ending
//R(eturns)
//  boolean
//E(xamples)
//  solution('abc', 'bc') // returns true
//  solution('abc', 'd') // returns false
//P(seudo Code)
//  1.) When a string and ending string are provided
//  2.) Check if string includes ending string
//  3.) Return true or false

const solution = (str, ending) => str.endsWith(ending) ? true : false
