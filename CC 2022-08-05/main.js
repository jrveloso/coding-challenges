// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

//P(arameters)
//  n --> non-negative integer
//R(eturns)
//  rearranged integer, all digits in descending order
//E(xamples)
//  Input: 42145 Output: 54421
//  Input: 145263 Output: 654321
//  Input: 123456789 Output: 987654321
//P(seudo Code)
//  1.) When n entered
//  2.) Split into an array
//  3.) Sort array in descending order
//  4.) Join array
//  5.) Return integer

const descendingOrder = n => Number(n.toString().split("").sort((a, b) => b - a).join(""))
