let str = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

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

function removeC(string) {
    return string.slice(string.indexOf('c') + 1).replaceAll('Eek!', "").split("").reverse().join("").split("v").map(word => word.charAt(0)).slice(1).join("")
}

const keyChars = [ 'S', 'p', 'a', 'c', 'e']

function replaceChars(str) {
    return str.split("").map(letter => keyChars.includes(letter) ? " " : letter).join("")
}


const reverseIt = str => str.split("").reverse().join("")

str = fixString(str)
str = removeC(str)
str = replaceChars(str)
str = reverseIt(str)


console.log(str)
