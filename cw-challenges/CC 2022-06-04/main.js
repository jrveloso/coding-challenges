// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'
// the string should start with a 1.
// The size will always be positive and will only use whole numbers.

//P(arameters)
//  number
//R(eturns)
//  string of 1s and 0s
//E(xamples)
//  with size 4 should return : '1010'.
//  a string with size 6 should return :'101010'.
//  with size 12 should return : '101010101010'.
//P(seudo Code)
//  1.) When given a number
//  2.) Return string of 1s and 0s

function stringy(size) {
    let string = []
    for(let i = 0; i < size; i++) {
        i % 2 === 0 ? string[i] = '1' : string[i] = '0'
    }
    return string.join("")
}
