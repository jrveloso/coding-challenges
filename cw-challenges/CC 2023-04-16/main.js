// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// number -> number
// 9119 -> 811181
// 765 -> 493625
// Convert number to string -> split -> convert each to number -> square each -> concat -> convert back to number

//one liner
// const squareDigits = num => Number(num.toString().split("").map(num => Number(num) * Number(num)).join(""))

//more readable
function squareDigits(num) {
    const numArr = num.toString().split("")
    const numArrSquared = numArr.map(num => Number(num) * Number(num))
    return result = Number(numArrSquared.join(""))
}

console.log(squareDigits(9119), 811181)
console.log(squareDigits(765), 493625)