// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

//P(arameters)
//  array
//R(eturns)
//  string with index of needle
//E(xamples)
//  ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
//P(seudo Code)
//  1.) When given an array of strings
//  2.) search array for value needle
//  3.) Return string with index 

function findNeedle(haystack) {
    let position
    haystack.find((word, index) => {
      if(word === "needle") {
        position = index
        return
      }
    })
    return `found the needle at position ${position}`
}