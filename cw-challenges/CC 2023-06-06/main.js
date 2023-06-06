// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  let newS = ""

  for(let char of s) {
    if(char !== "!") {
        newS = newS + char
    }
  }
  return newS
}

console.log(removeExclamationMarks("Hello World!"), "Hello World")