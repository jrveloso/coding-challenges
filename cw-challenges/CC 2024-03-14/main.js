// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// array of integers -> array of strings

// charCodeAt()

// map array
// if element integer is charCode for (a, e, i, o, u)
// find index charCode in vowelCodes
// return vowels[i]
// return array

function isVow(a){
    let vowels = [ "a", "e", "i", "o", "u" ]
    let vowelCodes = vowels.map(char => char.charCodeAt())
    return a.map(num => {
        if(vowelCodes.includes(num)) {
            let i = vowelCodes.indexOf(num)
            return vowels[i]
        } else {
            return num
        }
    })
}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);