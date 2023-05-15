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

function makeRansomNote(note, magazine) {
    const magWords = magazine.split(" ")
    const noteWords = note.split(" ")
    const obj = {}
    let possible = true

    for(const word of magWords) {
        obj[word] = obj[word] + 1 || 1
    }

    for(const word of noteWords) {
        if(obj[word]) {
            obj[word] = obj[word] - 1
            if(obj[word] < 0) {
                possible = false
            }
        } else {
            possible = false
        }
    }
    return possible
}