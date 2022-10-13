// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//P(arameters)
//  string
//R(eturns)
//  corrected string with S, O, and I in place of 5, 0, 1, respectively
//E(xamples)
//  L0ND0N --> LONDON
//  DUBL1N --> DUBLIN
//  BUDAPE5T --> BUDAPEST
//P(seudo Code)
//  1.) When a string is entered
//  2.) Check if it contains 5, 0, or 1
//  3.) If so, change to S, O, or I, respectively
//  4.) Return new string

function correct(string) {
    string = string.split('')
	for(let i = 0; i <= string.length; i++) {
        if(string[i] === '5') {
            string[i] = 'S'
        }
        if(string[i] === '0') {
            string[i] = 'O'
        }
        if(string[i] === '1') {
            string[i] = 'I'
        }
    }
    return string.join('')
}
