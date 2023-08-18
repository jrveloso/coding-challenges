// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:

// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note

// consecutive strings : follow one after another without an interruption

// array, integer -> string

// Loop through array
// Return new array with concatenated k strings starting from current element
// Find and return longest string

function revrot(str, sz) {
  let newStrs = str.map((s, i, a) => {
    for (let j = 1; j < sz; j++) {
        if(a[i + 1]) {
            s = s + a[i + 1];
        }
    }
    return s;
  }).slice(0, str.length - 1);

  let strLengths = newStrs.map(s => s.length)
  let longest = Math.max(...strLengths)
  return newStrs.find(s => s.length === longest)
}

console.log(
  revrot(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2),
  "folingtrashy"
);
console.log(
  revrot(
    ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
    2
  ),
  "abigailtheta"
);
