// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

//P(arameters)
//  array of positive integers  
//R(eturns)
//  sum of two lowest positive numbers
//E(xamples)
//  [19, 5, 42, 2, 77] --> 7
//  [10, 343445353, 3453445, 3453545353453] --> 3453455
//P(seudo Code)
//  1.) When an array of integers is given
//  2.) Find two lowest numbers
//  3.) Add them
//  4.) Return sum

function sumTwoSmallestNumbers(numbers) {  
    numbers = numbers.sort((a, b) => a - b)
    return sum = numbers[0] + numbers[1]
}
