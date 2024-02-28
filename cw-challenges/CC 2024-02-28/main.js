// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

// string -> string

// param -> lower case
// switch statement

function getDrinkByProfession(param){
    const word = param.split('').map((char, i) => {
        if(i === 0) {
            return char.toUpperCase()
        } else if(param[i - 1] === ' ') {
            return char.toUpperCase()
        } else {
            return char.toLowerCase()
        }
    }).join("")

    switch (word) {
        case 'Jabroni':
            return 'Patron Tequila'
        case 'School Counselor':
            return 'Anything with Alcohol'
        case 'Programmer':
            return 'Hipster Craft Beer'
        case 'Bike Gang Member':
            return 'Moonshine'
        case 'Politician':
            return 'Your tax dollars'
        case 'Rapper':
            return 'Cristal'
        default:
            return 'Beer'
    }
}

console.log(getDrinkByProfession("jabrOni"), "Patron Tequila");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer");
console.log(getDrinkByProfession("bike ganG member"), "Moonshine");
console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars");
console.log(getDrinkByProfession("rapper"), "Cristal");
console.log(getDrinkByProfession("pundit"), "Beer");
console.log(getDrinkByProfession("Pug"), "Beer");