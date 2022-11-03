// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 

//string of words, no empties? numbers?
// no funny business

//array of words sorted by last letter

function sortByLastChar(str) {
    //split str by " "
    //for each word -> split reverse join
    //sort
    //for each word -> split reverse join
    return str.split(" ")
              .map(word => word.split("").reverse().join(""))
              .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
              .map(word => word.split("").reverse().join(""))
  }
  
  console.log(sortByLastChar('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
  console.log(sortByLastChar('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'])
  console.log(sortByLastChar('take me to semynak'), ['take', 'me', 'semynak', 'to'])