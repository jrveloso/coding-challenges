// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!


//P(arameters)
//  array of numbers
//R(eturns)
//  string of numbers in format of phone-number
//E(xamples)
//  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//P(seudo Code)
//  1.) When given an array of numbers
//  2.) Convert all elements into string
//  3.) Concatenate into two array elements 
//  4.) Add parentheses around first element
//  5.) Splice - into 2nd element
//  6.) Join both strings with a " " and return phone number

function createPhoneNumber(numbers){
    first = numbers.filter((number, index) => index <= 2).map(number => number.toString())
    first.push(")")
    first.unshift("(")
    first.push(" ")
    second = numbers.filter((number, index) => index > 2).map(number => number.toString())
    second.splice(3, 0, "-")
    return first.concat(second).join("")
}
