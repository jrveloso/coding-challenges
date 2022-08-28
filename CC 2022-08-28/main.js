// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

//P(arameters)
//  
//R(eturns)
//  
//E(xamples)
//  "4556364607935616" --> "############5616"
//  "64607935616"   -->   "#######5616"
//  "1" --> "1"
//  "" -->  ""
//  "What was the name of your first pet?"
//  "Skippy" --> "##ippy"
//  "Nananananananananananananananana Batman!" --> "####################################man!"
//P(seudo Code)
//  1.) when string is given
//  2.) Split into array
//  3.) If element index is less than length of string - 4
//  4.) Return '#'
//  5.) Else return element
//  6.) Join array and return string

const maskify = cc => cc.split("").map((element, index) => index < cc.length - 4 ? '#' : element).join("")

