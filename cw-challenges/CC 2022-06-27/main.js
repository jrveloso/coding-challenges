// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

//P(arameters)
//  
//R(eturns)
//  
//E(xamples)
//  4 --> 3 (1, 2, 4)
//  5 --> 2 (1, 5)
//  12 --> 6 (1, 2, 3, 4, 6, 12)
//  30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
//P(seudo Code)
//  1.) When a number is entered
//  2.) Divide by each number from 1- number
//  3.) If there is no remainder, add to array
//  4.) Return array length

function getDivisorsCnt(n) {
    let divisors = []
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            divisors.push(n)
        }
    }
    return divisors.length
}