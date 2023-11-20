// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

// number -> string
// 36 -> (2**2)(3**3)
// 86240 -> (2**5)(5)(7**2)(11)

function primeFactors(n){
    // loop -> divide by 2 -> check if integer
    // if not, divide by 3 and so on
    // else repeat until final quotient is 1
    let q = n
    let i = 2
    let a = []
    while(q > 1) {
        // 36 > 1
        // 18 > 1
        // 9 > 1
        // 18
        // 9
        // 4.5
        if(Number.isInteger(q / i)) {
            // 18 is Integer, true
            q = q / i
            a.push(i)
            // [2]
            // [ 2, 2]
            i = 2
            
        } else {
            i = i + 1

        }
    }
    let obj = {}
    for(let num of a) {
        obj[num] = obj[num] + 1 || 1
    }
    let final = Object.entries(obj)
    return final.map(a => a[1] > 1 ? `(${a[0]}**${a[1]})` : `(${a[0]})`).join('')
}

console.log(primeFactors(36), "(2**2)(3**2)")
console.log(primeFactors(86240), "(2**5)(5)(7**2)(11)")