// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
// it("Should return max character", () => {
// assert.equal(max("Hello World!"), "l");
// });
// });
// No String or Array Methods (well brute force it first, but then no methods)!

// create map
// increment
// create most frequent variable
// loop map and reassign variable if prop >

function mostFrequent(s) {
    let map = {}

    for(let char of s) {
        if(map[char]) {
            map[char]++
        } else {
            map[char] = 1
        }
    }
    
    let most = 0
    let letter = ''
    for(let key in map) {
        if(map[key] > most) {
            most = map[key]
            letter = key
        }
    }
    
    return letter
}

console.log(mostFrequent("Hello World!"), "l")
console.log(mostFrequent("create most frequent variable"), "e")
console.log(mostFrequent("return the character"), "r")