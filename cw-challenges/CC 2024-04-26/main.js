// The idea for this kata came from 9gag today:

// The lyrics to "Never gonna give you up" by Rick Astley encoded in the NATO phonetic alphabet

// Task

// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

// There is a preloaded dictionary that you can use, named NATO. It uses uppercase keys, e.g. NATO['A'] is "Alfa". See comments in the initial code to see how to access it in your language.
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace

// string -> string

function toNato(words) {
  return words
    .split(" ")
    .join("")
    .split("")
    .map((char) =>
      !NATO[char.toUpperCase()] ? char : `${NATO[char.toUpperCase()]}`
    )
    .join(" ");
}

console.log(
  toNato("If you can read"),
  "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"
);
console.log(
  toNato("Did not see that coming"),
  "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf"
);
console.log(
  toNato("go for it!"),
  "Golf Oscar Foxtrot Oscar Romeo India Tango !"
);
