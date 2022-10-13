// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//P(arameters)
//  array of integers
//R(eturns)
//  average of array rounded down
//E(xamples)
//  [2,2,2,2] ==> 2
//P(seudo Code)
//  1.) When given array of integers
//  2.) Return average rounded down

const getAverage = marks => Math.floor(marks.reduce((sum, curr) => sum + curr, 0) / marks.length)