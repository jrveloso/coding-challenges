//Create a function that will fix a return a string with the numbers swapped for their corresponding letters. 

//P(arameters)
//  string
//R(eturns)
//  string
//E(xamples)
//  "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." --> "PRO-TIP #498: IT'S NICE TO SAY HELLO."
//P(seudo Code)
//  1.) When given a string
//  2.) Split the the string
//  3.) Iterate through each element
//  4.) run NaN method
//  5.) If true, return letter
//  6.) Else return corresponding letter
//  7.) Join string and return

function fixString(string) {
    const letters = [ "O", "I", "Z", "E", "h", "S", "G", "L", "B", 'q' ]

    return string.split(" ")
                 .map( word => word.split("")
                                   .map( letter => {
                                            if(letters.includes(letter)) {
                                                return letters.indexOf(letter)
                                            } else if(!isNaN(letter)) {
                                                return letters[Number(letter)]
                                            } else {
                                                return letter
                                            }
                                        })
                                   .join(""))
                 .join(" ")
}

console.log(fixString("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."))