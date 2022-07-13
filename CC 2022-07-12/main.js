// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

//P(arameters)
//  string
//R(eturns)
//  true or false
//E(xamples)
//  "Dermatoglyphics" --> true
//  "aba" --> false
//  "moOse" --> false (ignore letter case)
//P(seudo Code)
//  1.) When a string is entered
//  2.) Check if letter repeats in string
//  3.) If so, return false
//  4.) If not, return true

function isIsogram(str){
    str = str.toLowerCase()

    for(let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length; j++) {
            if(str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}