// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// If you want to know more: http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

//P(arameters)
//  string
//R(eturns)
//  new string
//E(xamples)
//  "ATTGC" --> "TAACG"
//  "GTAT" --> "CATA"
//P(seudo Code)
//  1.) When a string is entered
//  2.) Split string into array
//  3.) If element is A, T, G, or C, map and return T, A, C, or G respectively
//  4.) Join new array
//  5.) Return string


function DNAStrand(dna){
    return dna.split("").map(letter => {
        if(letter === 'A') {
            return 'T'
        } else if(letter === 'T') {
            return 'A'
        } else if(letter === 'G') {
            return 'C'
        } else {
            return 'G'
        }
    }).join("")
}