// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES

// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

// string -> array of integers

// store set of vowels
// for loop
// if set has current char.toLowerCase() -> return i + 1
// return array

function vowelIndices(word) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'y'])
    const indexes = []
    const wordLowerCase = word.toLowerCase()
    for(let i = 0; i <= wordLowerCase.length; i++) {
        let char = wordLowerCase[i]
        if(vowels.has(char)) {
            indexes.push(i + 1)
        }
    }
    return indexes
}

console.log(vowelIndices("mmm"), []);
console.log(vowelIndices("apple"), [1, 5]);
console.log(vowelIndices("super"), [2, 4]);
console.log(vowelIndices("orange"), [1, 3, 6]);
console.log(
  vowelIndices("supercalifragilisticexpialidocious"),
  [2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33]
);
