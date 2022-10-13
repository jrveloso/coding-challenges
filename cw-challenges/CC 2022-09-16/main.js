// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

//P(arameters)
//  two arrays
//R(eturns)
//  sorted array
//E(xamples)
//  a1 = ["arp", "live", "strong"]
//  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//  returns ["arp", "live", "strong"]

//  a1 = ["tarp", "mice", "bull"]
//  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//  returns []
//P(seudo Code)
//  1.) When given two arrays
//  2.) Iterate through a1
//  3.) Check if each string is contained within a2,
//  4.) If so, filter into new array
//  5.) Sort and return new array

function inArray(array1,array2){
    let arr = []
        array1
            .forEach(word => {
                let exists = ""
                for(let i = 0; i < array2.length; i++) {
                    exists = array2[i].includes(word) ? true : false
                    if(exists) {
                        arr.push(word)
                    }
                    if(exists) {
                        break
                    }
                }
            })
    return arr.sort()
}

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))