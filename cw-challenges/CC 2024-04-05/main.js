// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// string -> string

// loop for of -> if char === 'a' return b, if char === 'b' return 'a'
// return string

function switcheroo(x) {
    let final = ''
    for(let char of x) {
        if(char === 'a') {
            final += 'b'
        } else if(char === 'b') {
            final += 'a'
        } else {
            final += char
        }
    }
    return final
}

console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb'); 
console.log(switcheroo('ccccc'), 'ccccc');  