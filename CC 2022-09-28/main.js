// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// NOTE: All numbers will be whole numbers greater than 0.

//P(arameters)
//  number 
//R(eturns)
//  string in expanded form
//E(xamples)
//  expandedForm(12); // Should return '10 + 2'
//  expandedForm(42); // Should return '40 + 2'
//  expandedForm(70304); // Should return '70000 + 300 + 4'
//P(seudo Code)
//  1.) When given a number
//  2.) Convert num to String
//  3.) Split into array
//  4.) Iterate through
//  5.) If num > 0
//  6.) Concat array length - index + 1 of "0"
//  7.) If num[index] is index - 1 && !== 0
//  8.) Return num
//  9.) Join by " + "
//  10.) Return 

function expandedForm(num) {
    return num.toString().split("").map((stringNum, index) => {
        if(Number(stringNum) > 0) {
            return stringNum + "0".repeat(num.toString().length - (index + 1))
        } else if(index === num.length - 1 && Number(stringNum) !== 0) {
            return stringNum
        } else {

        }
    }).filter(el => el).join(" + ")
}
