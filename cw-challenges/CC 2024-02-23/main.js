// Description:

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  return s
    .split('')
    .map((el) => (vowels.indexOf(el) !== -1 ? "!" : el))
    .join('');
}

console.log(replace("Hi!"), "H!!");
console.log(replace("!Hi! Hi!"), "!H!! H!!");
console.log(replace("aeiou"), "!!!!!");
console.log(replace("ABCDE"), "!BCD!");
