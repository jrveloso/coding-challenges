// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.


//P(arameters)
//  array 
//R(eturns)
//  unique integer
//E(xamples)
//  findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//  findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//P(seudo Code)
//  1.) When given an array
//  2.) Find element that is not equal to element in front or back
//  3.) Return

function findUniq(arr) {
    let first = arr.filter((num, index) => num === arr[0])
    let second = arr.filter((num, index) => num !== arr[0])

    return (first.length < second.length) ? first[0] : second[0]
}
