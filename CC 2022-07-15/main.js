// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

//P(arameters)
//  string with letters (uppercase and lowercase) and numbers
//R(eturns)
//  count of characters occuring more than once
//E)xamples
//  "abcde" -> 0  # no characters repeats more than once
//  "aabbcde" -> 2  # 'a' and 'b'
//  "aabBcde" -> 2  # 'a' occurs twice and 'b' twice (`b` and `B`)
//  "indivisibility" -> 1  # 'i' occurs six times
//  "Indivisibilities" -> 2  # 'i' occurs seven times and 's' occurs twice
//  "aA11" -> 2  # 'a' and '1'
//  "ABBA" -> 2  # 'A' and 'B' each occur twice
//P(seudo Code)
//  1.) When string is entered
//  2.) Create empty object
//  3.) Loop through array
//  4.) Make all uppercases lowercases
//  5.) Sort the array
//  6.) If element is equal to last element, set value as one and increment
//  7.) Return value

function duplicateCount(text){
    let reoccurring = {}
    let count = 0

    text.split("").map(item => item.toLowerCase()).sort().forEach((item, index) => {
        return (reoccurring[item]) ? reoccurring[item]++ : reoccurring[item] = 1
    })

    const values = Object.values(reoccurring)

    for(let i = 0; i < values.length; i++) {
        if(values[i] > 1) {
            count++
        } 
    }
    return count
}

duplicateCount('aA11')