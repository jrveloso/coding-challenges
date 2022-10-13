// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//P(arameters)
//  string
//R(eturns)
//  boolean
//E(xamples)
//  XO("ooxx") => true
//  XO("xooxx") => false
//  XO("ooxXm") => true
//  XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//  XO("zzoo") => false
//P(seudo Code)
//  1.) When a string is entered
//  2.) Count # of O's
//  3.) Count # of X's
//  4.) If they are equal, return true
//  5.) Otherwise, return false

function XO(str) {
    let numOfX = []
    let numOfO = []

    str.split('').find((letter, i) => {
        if(letter === 'x' || letter === 'X') {
            numOfX.push(letter)
        }
        if(letter === 'o' || letter === 'O') {
            numOfO.push(letter)
        }
    })

    return numOfX.length === numOfO.length ? true : false
}
