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

//Day 4
// value
// what type is that value?
// will it ever be empty?
//  Will there ever be more or less than three values in each subarray?
// value only appears once in array

// writing 2 functions, one to move value up one row and one to move down the row when stacked

function moveUp(arr, value) {
    //find the index of value in the subarray
    let valueIndex
    let subarrayIndex
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].includes(value)) {
            valueIndex = arr[i].indexOf(arr[i].find(el => el === value))
            subarrayIndex = i
        }
    }
    //get index of subarray holding value
    //get index of subarray before other subarray
    let uparrayIndex
    if(subarrayIndex - 1 < 0) {
        uparrayIndex = arr.length - 1
    } else {
        uparrayIndex = subarrayIndex - 1
    }
    //get value with index matching the original value
    let swapValue = arr[uparrayIndex][valueIndex]
    //place og value into that spot
    arr[uparrayIndex][valueIndex] = value
    //place 2nd value into og's spot
    arr[subarrayIndex][valueIndex] = swapValue
    //return array
    return arr
}

function moveDown(arr, value) {
    //find the index of value in the subarray
    let valueIndex
    let subarrayIndex
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].includes(value)) {
            valueIndex = arr[i].indexOf(arr[i].find(el => el === value))
            subarrayIndex = i
        }
    }
    //get index of subarray holding value
    //get index of subarray before other subarray
    let uparrayIndex
    if(subarrayIndex + 1 > arr.length) {
        uparrayIndex = 0
    } else {
        uparrayIndex = subarrayIndex + 1
    }
    //get value with index matching the original value
    let swapValue = arr[uparrayIndex][valueIndex]
    //place og value into that spot
    arr[uparrayIndex][valueIndex] = value
    //place 2nd value into og's spot
    arr[subarrayIndex][valueIndex] = swapValue
    //return array
    return arr
}

console.log(moveUp([[0, 1, 2], [3, 4, 5], [6, 7, 8]], 3))
console.log(moveDown([[0, 1, 2], [3, 4, 5], [6, 7, 8]], 3))

//Day 5

function shuffleArray(arr) {
    let newArr = []
    arr = arr.flat()
    
    let i = 0
    while(newArr.length < 9) {
        let index = Math.floor(Math.random() * arr.length)
        
        if(!newArr.includes(arr[index] - 1)) {
            newArr.push(arr[index] - 1)
        }
        i++
    }
    
    let finalArr = [[],[],[]]
    newArr = newArr.map(num => arr[num])

    for(let i = 0; i < 3; i++) {
        finalArr[i] = newArr.splice(0, 3)
    }
    return finalArr
}

console.log(shuffleArray([[1,2,3],[4,5,6],[7,8,9]]))