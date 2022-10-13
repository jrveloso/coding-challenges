// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
//P(arameters): first num(a), second num(b), 
//R(eturns): sum of a + b, converted sum in binary string
//E(xamples):
//P(seudo Code): 
//  add a and b
//  convert to binary
//return string
function addBinary(a, b) {
    return (a + b).toString(2)
}
