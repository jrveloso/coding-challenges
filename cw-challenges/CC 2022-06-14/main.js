// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

//P(arameters)
//  l
//R(eturns)
//  array of only integers
//E(xamples)
//  filter_list([1,2,'a','b']) == [1,2]
//  filter_list([1,'a','b',0,15]) == [1,0,15]
//  filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
//P(seudo Code)
//  1.) When a user enters an array
//  2.) Filter through the array, testing if elements are integers
//  3.) Return new array

const filter_list = l => l.filter((item => Number.isInteger(item)))