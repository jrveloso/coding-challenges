// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

function spacify(str) {
  return str
    .split("")
    .map((char, i) => i !== str.length - 1 ? char + " " : char)
    .join("");
}
