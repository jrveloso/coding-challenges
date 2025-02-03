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

// array of strings, string -> boolean
// create a map
// canCreate = true
// for loop magazine
// if map[word] exists -> increment
// else map[word] = 1
// string split by space
// for loop string
// if map[word] > 0 -> map[word]--
// else canCreate = false
// return canCreate

function ransomNote(s, magazine) {
    const map = {}
    let canCreate = true

    for(let word of magazine) {
        if(map[word]) {
            map[word]++
        } else {
            map[word] = 1
        }
    }
    let noteSplit = s.split(" ")
    for(let word of noteSplit) {
        if(map[word] > 0) {
            map[word]--
        } else {
            canCreate = false
            break
        }
    }
    return canCreate
}

// console.log(ransomNote("sit ad est love", ['the','sit','ad','est','hi']), true)
// console.log(ransomNote("sit ad est sint in in", magazine), false)
console.log(ransomNote("sit ad est sint in in in in", ['the','sint','in','in','in','sit','ad','est','hi']), true)
// console.log(ransomNote("sit ad est sint in in in in", magazine), false)