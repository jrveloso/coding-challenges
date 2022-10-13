// Some numbers have funny properties. For example:
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:
// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.
// Note: n and p will always be given as strictly positive integers.

//P(arameters)
//  n, p
//R(eturns)
//  k or -1
//E(xamples)
//  digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
//  digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
//  digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
//  digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
//P(seudo Code)
//  1.) When n and p are provided
//  2.) Split n into array
//  3.) Convert values in array into integers
//  4.) Multiply each succesive element by p + 1
//  5.) Sum all elements
//  6.) Check if sum is divisible by n
//  7.) If so return k
//  8.) Else return -1

function digPow(n, p){
    nSplit = n.toString().split("").map(num => Number(num))
    for(let i = 0; i < nSplit.length; i++) {
        nSplit[i] = Math.pow(nSplit[i], p)
        p++
    }
    nSplitSum = nSplit.reduce((sum, curr) => sum + curr, 0)

    return Number.isInteger(nSplitSum / n) ? nSplitSum / n : -1
}

