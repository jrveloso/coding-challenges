// Given a string, return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.
// For example:
// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

//str -> no funny business
//str -> words are reversed. opposite case

function oppositeCase(str) {
    //trim
    //split --> " "
    //reverse array then join " "
    //loop --> reverse casing
    //return that string
    return str.trim().split(" ").reverse().join(" ").split("").map(letter => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()).join("")
  }
  
  console.log(oppositeCase("Example Input"), "iNPUT eXAMPLE")
  console.log(oppositeCase("AHHHH"), "ahhhh")
  console.log(oppositeCase("  What are you talking about  "), "ABOUT TALKING YOU ARE wHAT")