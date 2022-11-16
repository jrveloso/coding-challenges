// Write a function that takes a string and return a new string with all vowels removed

//string
//modified string
// disemvowel('hello world') -> 'hll wrld'
// disemvowelc'my name is') -> 'my nm s'

function disemvowel(str) {
    //create a set with all vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    console.log(vowels)
    //split str
    //filter if letter is in set
    return str.split("").filter(letter => !vowels.has(letter)).join("")
  }
  
  // const disemvowel = str => {
  //    let vowels = [ 'a', 'e', 'i', 'o', 'u']
  
  //    return str.split("").filter( letter => {
  //       return vowels.indexOf( letter.toLowerCase()) == -1  
  //    }).join("")
  // }
  
  console.log(disemvowel('hello world'), 'hll wrld')
  console.log(disemvowel('my name is'), 'my nm s')