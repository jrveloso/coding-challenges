// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// If a value is present in b, all of its occurrences must be removed from the other:

//P(arameters)
//  two arrays
//R(eturns)
//  array b with matching values removed
//E(xamples)
//  arrayDiff([1,2],[1]) == [2]
//  arrayDiff([1,2,2,2,3],[2]) == [1,3]
//P(seudo Code)
//  1.) Given 2 arrays
//  2.) If a value in array 'a' exists in array 'b'
//  3.) Remove all orccurences of that value from array 'b'
//  4.) Return array b

const arrayDiff = (a, b) => a.filter(el => !b.includes(el))