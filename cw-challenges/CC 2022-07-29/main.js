// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).

//P(arameters)
//  n, x
//R(eturns)
//  array 
//E(xamples)
//  countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//  countBy(2,5) === [2,4,6,8,10]
//P(seudo Code)
//  1.) When given n and x
//  2.) Return x multiples of n

function countBy(x, n) {
    let z = [x];
    for(let i = 1; i < n; i++) {
        z[i] = z[i - 1] + x
    }
    return z;
}