// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

//P(arameters)
//  a, b
//R(eturns)
//  sum
//E(xamples)
//  (1, 0) --> 1 (1 + 0 = 1)
//  (1, 2) --> 3 (1 + 2 = 3)
//  (0, 1) --> 1 (0 + 1 = 1)
//  (1, 1) --> 1 (1 since both are same)
//  (-1, 0) --> -1 (-1 + 0 = -1)
//  (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
//P(seudo Code)
//  1.) When user enters a and b
//  2.) Find min and max of the arguments
//  3.) Find # of integers between a and b by doing (min - max + 1)
//  4.) Multiply by sum of min and max and divide by 2 for the sum of every integer between and including min and max

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}