// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples

// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

function remove(string) {
  if(string.slice(string.length - 1, string.length) === "!") {
    return string.slice(0, string.length - 1)
  } else {
    return string
  }
}

console.log(remove("Hi!"), "Hi")
console.log(remove("Hi!!!"), "Hi!!")
console.log(remove("!Hi"), "!Hi")
console.log(remove("!Hi!"), "!Hi")
console.log(remove("Hi! Hi!"), "Hi! Hi")
console.log(remove("Hi"), "Hi")
