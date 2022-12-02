// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

//string -> reversed string

//"hello" -> "olleh"
//"what are you doing?" -> "?gniod ouy era tahw"
//"1-800-203-2022" -> "2202-302-008-1"
//"" -> ""

function reverseString(str) {
    //str -> split -> reverse -> join
    // return str.split("").reverse().join("")
    // return str.split("").reduce((a, c) => c + a, "")
    //adding letters to an empty string
    let reversed = ""
    for(let letter of str) {
      reversed = letter + reversed 
    }
    return reversed
  }
  
  console.log(reverseString("hello"), "olleh")
  console.log(reverseString("what are you doing?"), "?gniod ouy era tahw")
  console.log(reverseString("1-800-203-2022"), "2202-302-008-1")
  console.log(reverseString(""), "")