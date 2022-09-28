// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

//P(arameters)
//  array
//R(eturns)
//  string
//E(xamples)
//  ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
//P(seudo Code)
//  1.) When given array
//  2.) Find string 'needle' and index
//  3.) Return string plus index

const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`