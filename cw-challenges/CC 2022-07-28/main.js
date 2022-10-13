// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)


//P(arameters)
//  n -> row of triangle
//R(eturns)
//  sum of odd nums
//E(xamples)
//  1 -->  1
//  2 --> 3 + 5 = 8
//P(seudo Code)
//  1.) When n is provided
//  2.) Create an empty array to hold each row of triangle
//  3.) if index > 1, insert # of consecutive odd numbers == to index value
//  4.) Repeat until n
//  5.) Starting at index 1 of triangle, insert odd number
//  6.) Sum all nums in nth array and return

function rowSumOddNumbers(n) {
    let triangle = [0]
    let odd = 1

    for(let i = 1; i <= n; i++) {
        triangle[i] = []
    }
    
    for(let i = 1; i <= n; i++) {
        if(i > 1) {
            for(let j = 0; j < i; j++) {
                triangle[i][j] = odd
                odd += 2
            }
        } else {
            triangle[i] = [odd]
            odd += 2
        }
    }
    return triangle[n].reduce((sum, curr) => Number(sum) + Number(curr), 0)
}