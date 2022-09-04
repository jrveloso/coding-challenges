// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

//P(arameters)
//  string
//R(eturns)
//  word in string with highest score
//E(xamples)
//  ('aa b'), 'aa')
//P(seudo Code)
//  1.) When given a string of words
//  2.) Create an object holding each letter and position number
//  3.) In function, split string by " "
//  4.) Split each word into letters
//  5.) Check if letter matches a letter in alphabet,
//  6.) If so, return number 
//  7.) Repeat for all words
//  8.) Reduce to single value
//  9.) Check for highest value and return the word at that index

const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
}
function high(x){
    const numbers = x.split(" ")

    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i]
                        .split("")
                        .map(letter => {
                                const array = Object.entries(alphabet)
                                
                                for(let j = 0; j < array.length; j++) {
                                        if(array[j][0] == letter) {
                                            return array[j][1]
                                        }
                                }
                        })
                        .reduce((sum, curr) => sum + curr, 0)
    }
    const sorted = numbers.map(el => el).sort((a, b) => a - b)
    
    const highest = sorted[sorted.length - 1]
    
    x = x.split(" ")
    
    return (x.filter(num => num === highest).length > 1) ? numbers.findIndex(highest) : x[numbers.indexOf(highest)]
}