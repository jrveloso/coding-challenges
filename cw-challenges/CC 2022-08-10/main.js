// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

// If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

//P(arameter)
//  signature --> array of 3 numbers,   n ---> first n elements
//R(eturns)
//  array of n elements in sequence
//E(xamples)
//  [1, 1, 1], 8 ---> [1, 1 ,1, 3, 5, 9, 17, 31]
//  [0, 0, 1], 9 [0, 0, 1, 1, 2, 4, 7, 13, 24]
//P(seudo Code)
//  1.) When signature array and n are provided
//  2.) Filter last three of signature array into new array
//  3.) Find sum of numbers in new array
//  4.) Add to end of signature 
//  5.) Repeat n times

function tribonacci(signature,n) {
    if(n <= 0) {
        return [] 
    } else if (n <= 3) {
        return signature.splice(0, n)
    } else {
        let additions = n - signature.length

        for(let i = 0; i < additions; i++) {    
            let lastThree = signature.filter((number, index) => {
                return index >= (signature.length - 3)
            })    
            sumOfThree = lastThree.reduce((sum, curr) => sum + curr, 0)    
            signature.push(sumOfThree)    
        }
        return signature
    }
}
