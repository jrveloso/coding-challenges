// Description:

// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples

// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

// string -> string

function remove(s, n) {
  // create variable to hold # of exclamations
  let exes = 0
  return s.split("").filter(char => {
    if(char !== "!") {
        return char
    } else {
        if(exes < n) {
            exes = exes + 1
        } else {
            return char
        }
    }
  }).join("")
}

console.log(remove("Hi!",1), "Hi")
console.log(remove("Hi!",100), "Hi")
console.log(remove("!!!Hi !!hi!!! !hi",1), "!!Hi !!hi!!! !hi")
