function removeChar(str, x) {
    return str.split("").filter((letter, i) => (i + 1) % 4 !== 0).join("")
}

console.log(removeChar("Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"))