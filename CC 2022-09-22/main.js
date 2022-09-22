// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:
// ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]


//P(arameters)
//  array of strings
//R(eturns)
//  filtered list with geese removed
//E(xamples)
//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
//  ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
//P(seudo Code)
//  1.) When given a string of birds
//  2.) Check if each string matches one in geese array
//  3.) If so, don't include in new array
//  4.) Return new array 

const gooseFilter = birds => {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

    return birds.filter(bird => geese.indexOf(bird) === -1)
}