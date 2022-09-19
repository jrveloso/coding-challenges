// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

//P(arameters)
//  2 numbers
//R(eturns)
//  number, count of all numbers without a 5
//E(xamples)
//  1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
//  4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
//P(seudo Code)
//  1.) When given two numbers
//  2.) Filter all numbers without 5
//  3.) Return length

function dontGiveMeFive(start, end) {
    let arr = []
    let length = end - start
    for(let i = 0; i <= length; i++) {
        arr[i] = start
        start++
    }
    return arr.filter((num, index) => !num.toString().includes('5')).length
}

console.log(dontGiveMeFive(4, 17))