// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
// it("Should return max character", () => {
// assert.equal(max("Hello World!"), "l");
// });
// });
// No String or Array Methods (well brute force it first, but then no methods)!

O(n) solution
function maxCharacter(str) {
  let charMap = {},
      count= 0,
      maxChar = null

  //using string using for of
  for(const char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }

  //using object using for in
  for(const char in charMap) {
    //FUNDAMENTAL PATTERN
    if(charMap[char] > count) {
      count = charMap[char]
      maxChar = char
    }
  }
  return maxChar
}