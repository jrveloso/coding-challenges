// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

//P(arameters)
//  operation, value1, value2
//R(eturns)
//  result of value1 and value2
//E(xamples)
//  ('+', 4, 7) --> 11
//  ('-', 15, 18) --> -3
//  ('*', 5, 5) --> 25
//  ('/', 49, 7) --> 7
//P(seudo Code)
//  1.) When user enters chosen operation and both values
//  2.) Return result of nums

function basicOp(operation, value1, value2) {
    if(operation === '+') {
        return value1 + value2
    } else if(operation === '-') {
        return value1 - value2
    } else if(operation === '*') {
        return value1 * value2
    } else if(operation === '/') {
        return value1 / value2
    } 
}