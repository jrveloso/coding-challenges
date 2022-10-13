// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

//P(aramters)
//  string
//R(eturns)
//  object counting all occurring characters in a string
//E(xamples)
//  string like aba, then the result should be {'a': 2, 'b': 1}
//P(seudo Code)
//  1.) When a string is entered 
//  2.) Declare an object
//  3.) Split string into array
//  4.) Loop through array
//  5.) Check if object has element
//  6.) If true, 


function count (string) {  
    let count = {}
    
    string.split("").forEach(function(element) {
        console.log(element)
        count[element] ? count[element]++ : count[element] = 1
    })
    
    return count
}

console.log(count('abcd'))