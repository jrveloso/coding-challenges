// Write a function that returns a string in which firstname is swapped with last name.

//P(arameters)
//  string
//R(eturns)
//  string
//E(xamples)
//  "john McClane" --> "McClane john"
//P(seudo Code)
//  1.) When given a string name
//  2.) Switch first name with lastname
//  3.) Return new string

function nameShuffler(str){
    return str.split(" ").reverse().join(" ")
}