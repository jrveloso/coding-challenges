// Write a function that checks if a given string (case insensitive) is a palindrome.

//P(arameters)
//   string
//R(eturns)
//  true or false, case insensitive
//E(xamples)
//  a --> true
//  aba --> true
//  Aba --> true
//  hello --> false
//P(seudo Code)
//  1.) When given a string
//  2.) Split string
//  3.) Reverse string, join and store in new variable
//  4.) If each letter converted to lower case is equal to letters in original string
//  5.) Return true
//  6.) Else return false

function isPalindrome(x) {
    x = x.split("")
    y = x.map(letter => letter).reverse()
    return y.every((letter, index) => {
       return (letter.toLowerCase() === x[index].toLowerCase()) ? true : false
    })
}

console.log(isPalindrome('hello'))