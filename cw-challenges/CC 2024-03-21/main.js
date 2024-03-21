// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// string -> array
// declare empty array
// for of loop -> if charAt even -> push uppercase to first array element, push lowercase to second array element
// return array

function capitalize(s) {
  const result = ['', '']
  for(let i = 0; i < s.length; i++) {
    if(i % 2 === 0) {
        result[0] += (s[i].toUpperCase())
        result[1] += (s[i].toLowerCase())
    } else {
        result[0] += (s[i].toLowerCase())
        result[1] += (s[i].toUpperCase())
    }
  }
  return result
}

console.log(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);