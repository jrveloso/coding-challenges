// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

// Rules
//  1.  The input string will always be lower case but maybe empty.
//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat

//P(arameters)
//  string
//R(eturns)
//  array
//E(xamples)
//  wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
//P(seudo Code)
//  1.) When given a string
//  2.) Create array
//  3.) Copy string into array string.length times
//  4.) Starting with first word and first letter
//  5.) Capitalize each successive letter
//  6.) Return array

function wave(str){
    let arr = []
    let indexes = []
    for(let i = 0; i < str.length; i++) {
        arr[i] = str.split("")
        arr[i][i] = arr[i][i].toUpperCase()
        arr[i] = arr[i].join("")
        if(arr[i][i] === " ") {
            indexes.push(i)
        }
    }
    for(let i = indexes.length - 1; i >= 0; i--) {
        arr.splice(indexes[i], 1)
    }
    return arr
}
