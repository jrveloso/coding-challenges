// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// None of the arrays will be empty, so you don't have to worry about that!

//P(arameters)
//  array
//R(eturns)
//  new array
//E(xamples)
//  ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//P(seudo code)
//  1.) When an array is given
//  2.) Iterate through array and remove every 2nd element
//  3.) Return array

const removeEveryOther = arr => arr.filter((element, index) => (index % 2) === 0)