// Implement a pseudo-encryption algorithm which given a string text and an integer N concatenates all the odd-indexed characters of text with all the even-indexed characters of text, this process should be repeated N times.
// Together with the encryption function, you should also implement a decryption function which reverses the process.
// If the string text is an empty value or the integer N is not positive, return the first argument without changes.

//P(arameters)
//  encrypt -> text, n
//  decrypt -> encryptedText, n
//R(eturns)
//  
//E(xamples)
//  encrypt("012345", 1)  =>  "135024"
//  encrypt("012345", 2)  =>  "135024"  ->  "304152"
//  encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

//  encrypt("01234", 1)  =>  "13024"
//  encrypt("01234", 2)  =>  "13024"  ->  "32104"
//  encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
//P(seudo Code)
//  Encrypt
//      1.) When text and n are provided
//      2.) If text is empty or n <= 0, return text
//      3.) Else, create empty array to store encrypted text
//      4.) Store odd indexed variables in odd and join into string
//      5.) Store even indexed variables in even and join into string
//      6.) Concat odd and even
//      7.) Repeat n times and return

function encrypt(text, n) {
    if(!text || n <= 0) {
        return text
    } else {
        let code = []

        for(let i = 0; i < n; i++) {
            let odd = text.split("").filter((number, index) => {
                if(index % 2 !== 0) {
                    return number
                }
            }).join("")

            let even = text.split("").filter((number, index) => {
                if(index % 2 === 0) {
                    return number
                }
            }).join("")
            
            code = odd.concat(even)
            text = code
        }
        return code
    }
}

//P(seudo Code)
//  Decrypt
//      1.) When encryptedText and n are provided
//      2.) If encryptedText is empy of n <=0, return encryptedText
//      3.) Else, create empty array named string to hold decrypted string
//      4.) Split encryptedText into arrays firstHalf and secondHalf
//      5.) Add first element of firstHalf to string
//      6.) Add first element of secondHalf to string
//      7.) Continue through both strings
//      8.) Repeat n times
//      9.) Return original string


function decrypt(encryptedText, n) {
    //If encryptedText is empy of n <= 0, return encryptedText
    if(!encryptedText || n <= 0) {
        return encryptedText
    } else {
        //Else, create empty array named string to hold decrypted string
        let string = []

        //Repeat n times
        for(let i = 0; i < n; i++) {
            //Split encryptedText into arrays firstHalf and secondHalf
            let firstHalf = encryptedText.split("").filter((number, index) => {
                if(index <= (encryptedText.length/2) - 1) {
                    return number
                }
            })
            // console.log(firstHalf)
            let secondHalf = encryptedText.split("").filter((number, index) => {
                if(index > (encryptedText.length/2) - 1) {
                    return number
                }
            })
            // console.log(secondHalf)

            //For length of string
            for(let i = 0; i < encryptedText.length; i++) {
                if(i % 2 === 0) {
                    //Add first element of firstHalf to string
                    string[i] = secondHalf.shift()
                } else if(i % 2 !== 0) {
                    //Add first element of secondHalf to string
                    string[i] = firstHalf.shift()
                }
            }
            //make encryptedText === string
            encryptedText = string.join("")
        }
        //Return original string
        return string.join("")
    }
}