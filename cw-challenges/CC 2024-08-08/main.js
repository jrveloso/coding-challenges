// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

// create an object with keys 2-9 and corresponding letters
// given digits, for loop through and use two pointers
// push answers to array
// return array

function backtrack(index,path,digits,letters,combinations){
    if(path.length === digits.length) {
        combinations.push(path.join(''))
        return
    }

    let possibleLetters = letters[digits[index]]
    console.log(letters,digits,index)

    if(possibleLetters) {
        for(let i =0; i < possibleLetters.length;i++) {
            let letter = possibleLetters[i];
            path.push(letter)
            backtrack(index + 1, path,digits,letters,combinations)
            path.pop()
        }
    }
}

const letterCombinations = (digits) => {
  let combinations = [];

  if (digits.length === 0) {
    return [];
  }

  const digitsMapping = {
    1: [""],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  backtrack(0,[],digits,digitsMapping,combinations)
  return combinations
};

console.log(letterCombinations("23"),["ad","ae","af","bd","be","bf","cd","ce","cf"]);
// console.log(letterCombinations("2"), ["a","b","c"])
// console.log([].push([].join('')))
