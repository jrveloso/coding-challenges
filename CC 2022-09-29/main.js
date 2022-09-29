// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

//P(arameters)
//  string
//R(eturns)
//  array of indexes
//E(xamples)
//  'CodEWaRs' ---> [0,3,4,6]
//P(seudo Code)
//  1.) When given a string
//  2.) Split string
//  3.) Loop through
//  4.) Check if letter is capital
//  5.) Return index if so
//  6.) Return array

const capitals = function (word) {
	let indexes = []
    word.split("").forEach((letter, i) => letter === letter.toUpperCase() ? indexes.push(i) : false) 
    return indexes
}
