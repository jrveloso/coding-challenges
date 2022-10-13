// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:

// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//P(arameter): 
//  n
//R(eturns): 
//  reversed array
//E(xamples): 
//  348597 => [7,9,5,8,4,3]
//P(seudo Code):
//  convert n into an array
//  reverse array and return

let digitize = n => String(n).split('').reverse().map(num => Number(num))
