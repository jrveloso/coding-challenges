const keyChars = [ 'S', 'p', 'a', 'c', 'e']

function replaceChars(str) {
    return str.split("").map(letter => keyChars.includes(letter) ? " " : letter).join("")
}
