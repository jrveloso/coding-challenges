// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

//P(arameters)
//  string
//R(eturns)
//  string starting with hashtag and each word first letter capitalized
//  false if longer than 140 char, or empty string
//E(xamples)
//  " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
//  "    Hello     World   "                  =>  "#HelloWorld"
//  ""                                        =>  false
//P(seudo Code)
//  1.) When given a string
//  2.) Split by " "
//  3.) capitalize every word
//  4.) Join
//  5.) Add hashtag to front
//  6.) If longer than 140 char or an empty string
//  7.) return false
//  8.) Return string

function generateHashtag (str) {
    const hash = "#" + str
                        .trim()
                        .split(" ")
                        .map(word => word.charAt(0).toUpperCase() + word.substring(1))
                        .join("")

    return hash.length <= 140 && hash != "#" && hash !== "" ? hash : false
}