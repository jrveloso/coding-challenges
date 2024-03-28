// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

// string -> integer
// create variable to hold value
// loop -> convert to number and add value to variable
// return variable

function uniTotal(string) {
    let value = 0
    for(let char of string) {
        value += Number(char.charCodeAt())
    }
    return value
}

console.log(uniTotal("Mary Had A Little Lamb", 1873))
