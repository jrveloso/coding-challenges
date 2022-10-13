// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//P(arameters)
//  string of space separated numbers
//R(eturns)
//  highest and lowest number in the string
//E(xamples)
//  highAndLow("1 2 3 4 5");  // return "5 1"
//  highAndLow("1 2 -3 4 5"); // return "5 -3"
//  highAndLow("1 9 3 4 -5"); // return "9 -5"
// P(seudo Code)
//  1.) When a string of space separated numbers is entered
//  2.) Split the string into an array.
//  3.) Find the highest value and lowest value.
//  4.) return a string with both

function highAndLow(numbers){
    numbers = numbers.split(" ").map(item => Number(item)).sort((a, b) => a - b)
    return `${numbers[numbers.length - 1]} ${numbers[0]}`
}
