// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

// string -> boolean

//Example: "abcEnglishdef" -> true
//Example: "abcnEglishsef" -> false

function spEng(sentence) {
  let string = sentence.split("").map(letter => letter.toLowerCase()).join("")
  return string.includes("English".toLowerCase())
}

console.log(spEng("abcEnglishdef"), true)
console.log(spEng("abcnEglishsef"), false)