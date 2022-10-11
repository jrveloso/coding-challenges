//Day 1
const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]

const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

const checkEquality = (arr, arr2) => arr.flat().every((letter, i) => letter === arr2.flat()[i])
// console.log(checkEquality(arr1, arr3))

//Day2
//Create 2 functions
//1st swaps a given value in an array to the left
//2nd swaps a given value in an array to the right
//If value is at the start or end of array, don't swap
//Array should be mutated
const myArray = ['abc', 'xyz', 1, 2, 'Hey!']

function moveRight(arr, value) {
    if(arr.indexOf(value) !== arr.length - 1) {
        let i = arr.indexOf(value)
        console.log(i)
        let shifted = arr.splice(arr.indexOf(value), 1)
        arr.splice(i + 1, 0, shifted)
    }
    return arr.flat()
}
// console.log(moveRight(myArray, 2))

function moveLeft(arr, value) {
    if(arr.indexOf(value) !== 0) {
        let i = arr.indexOf(value)
        console.log(i)
        let shifted = arr.splice(arr.indexOf(value), 1)
        arr.splice(i - 1, 0, shifted)
    }
    return arr.flat()
}
// console.log(moveLeft(myArray, 1))


//Day3
//array of strings
//array

// myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
// move things around
// => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']


function moveString(arr) {
    const middle = arr.filter(el => !el.includes('a') && el.length <= 3)
    const start = arr.filter(el => el.includes('a'))
    const end = arr.filter(el => el.length > 3 && !el.includes('a'))
    
    return start.concat(middle.concat(end))
}

console.log(moveString(['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']))