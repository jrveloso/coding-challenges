// The Fibonacci numbers are the numbers in the following integer sequence (Fn):
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
// such as
// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying:
// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:
// [F(n), F(n+1), true]
// if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prod, you will return
// [F(n), F(n+1), false]
// F(n) being the smallest one such as F(n) * F(n+1) > prod.


//P(aramters)
//  Number
//R(eturns)
// array ho
//E(xamples)
//  productFib(714) # should return [21, 34, true], 
//  productFib(800) # should return [34, 55, false], 
//P(seudo Code)
//  1.) When number is entered 
//  2.) Use loop to create fibonacci sequence 
//  3.) Have loop find product of F(n) * F(n + 1)
//  4.) compare this product to given prod
//  5.) if equal return array [F(n), F(n + 1), true]
//  6.) else if product > prod 
//  7.) Return [F(n), F, false]

function productFib(prod){
    let product = 0
    let fib = [0, 1]
    let i = 0

    while(prod > product) {
        product = fib[i] * fib[i + 1]        
        fib[i + 2] = fib[i] + fib[i + 1]
        i++
    }    
    return (prod === product) ? [fib[fib.length - 3], fib[fib.length - 2], true] : [fib[fib.length - 3], fib[fib.length - 2], false]
}