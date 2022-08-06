// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// Rules:
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.

//P(aramters)
//  n
//R(eturns)
//  string of number rounded to 2 decimal places
//E(xamples)
//  1 --> 1 --> "1.00"
//  2 --> 1 + 1/4 --> "1.25"
//  5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
//P(seudo Code)
//  1.) When n is entered
//  2.) If n is 0, return 0.00
//  3.) Else sum up to nth parameter
//  4.) Return sum as string and to 2 decimal places

function SeriesSum(n) {
    let sum = 0
    let denom = 4
    for(let i = 0; i < n; i++) {
        if(i <= 0) {
            sum++
        } else {
            sum += (1/denom)
            denom += 3
        }
    }
    return sum.toFixed(2)
}
