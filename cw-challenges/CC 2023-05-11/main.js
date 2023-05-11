// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });

// string, string -> boolean
// Given a string
// Create possible variable
// Create object, split magazine, loop and store word with count
// loop through ransom -> if it exists in magazine, decrement in object
// if 0, change to false, otherwise return true

function ransomNote(ransom, magazine) {
    const magArr = magazine.split(" ")
    const ransomArr = ransom.split(" ")
    const magWords = {}
    let possible = true

    for(const word of magArr) {
        magWords[word] = magWords[word] + 1 || 1
    }

    
    for(const word of ransomArr) {
        if(magWords[word]) {
          magWords[word]--
          if(magWords[word] < 0) possible = false 
        } else {
          possible = false
        }
      }
    return possible
}

console.log(ransomNote())