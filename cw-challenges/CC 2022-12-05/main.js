// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//string -> count of all occurring chars in string
//string can be empty

// aba -> {'a': 2, 'b': 1}
// "" -> {}
// hello world 0> {"h": 1, "e": 1, "l": 3, "o": 2, " ": 1, "w": 1,"r": 1, "d": 1}

function charCount(str) {
    //empty {}
    //split -> loop
    //{} doesn't include char, set to 1
    //otherwise ++
    const count = {}
    str.split("").forEach(char => count[char] ? count[char]++ : count[char] = 1)
    return count
  }
  
  console.log(charCount("aba"), {'a': 2, 'b': 1})
  console.log(charCount(""), {})
  console.log(charCount("hello world"), {"h": 1, "e": 1, "l": 3, "o": 2, " ": 1, "w": 1,"r": 1, "d": 1})