// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// array of strings -> array of arrays of strings
// always strings, might be empty, no capitals

// a === 1 -> return [a]
// create results array
// create a map
// loop array
//      sort str
//      if map[sortedStr] -> [].push(str)
//      else map[sortedStr] -> [].push(str)
// for in loop map
//      push each prop array to a results array
// return results

function groupAnagrams(a) {
    if(a.length === 1) {
        return [a]
    }
    let results = []
    const map = {}

    for(let i = 0; i < a.length; i++) {
        let sortedStr = a[i].split("").sort().join("")
        
        if(map[sortedStr]) {
            map[sortedStr].push(a[i])
        } else {
            map[sortedStr] = [a[i]]
        }
    }

    // for(let key in map) {
    //     results.push(map[key])
    // }
    return Object.values(map)

    // return results
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]), [["bat"],["nat","tan"],["ate","eat","tea"]])
console.log(groupAnagrams([""]), [[""]])
console.log(groupAnagrams(["a"]), [["a"]])