// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// Hint: Don't forget to check for bad values like null/undefined

//P(arameters)
//  array
//R(eturns)
//  numOfSheep
//E(xamples)
//  [true,  true,  true,  false,
//  true,  true,  true,  true ,
//  true,  false, true,  false,
//  true,  false, false, true ,
//  true,  true,  true,  true ,
//  false, false, true,  true]
//  The correct answer would be 17.
//P(seudo Code)
//  1.) When a user enters an array
//  2.) Loop through array, checking if element is true
//  3.) If true, add 1 to numOfSheep
//  4.) Return numOfSheep

function countSheeps(arrayOfSheep) {
    let numOfSheep = 0
    for(sheep of arrayOfSheep) {
        if(sheep === true) {
            numOfSheep++
        }
    }
    return numOfSheep
}