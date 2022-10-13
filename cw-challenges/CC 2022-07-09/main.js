// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

//P(arameters)
//  number
//R(eturns)
//  array
//E(xamples)
//  10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]
//P(seudo Code)
//  1.) When given a number
//  2.) Return array with all numbers from 1 to number

function monkeyCount(n) {
    let array = []
    for(let i = 0; i < n; i++) {
        array[i] = i + 1        
    }
    return array
}