// Task

// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

//P(arameters)
//  
//R(eturns)
//  
//E(xamples)
//  A size 3 diamond:
//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"
// A size 5 diamond:
//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"
//P(seudo Code)
//  1.) When given an integer
//  2.) Create a string with * === integer
//  3.) Add /n to the end
//  4.) Create new string with * - 2
//  5.) Add " " to the front and /n to the end
//  6.) Continue until * is 1


function diamond(n){
    if(n % 2 === 0 || n < 0) {
        return null
    } else {
        const star = "*"
        let string = star.repeat(n).concat("\n")
        let diam = [string]
        let space = " "
        let l = n
        
        for(let i = l; i > 0; i--) {
            if(i % 2 === 1 && i !== n) {
                string = space + star.repeat(i).concat("\n")
                diam.unshift(string)
                diam.push(string)
                space += " "
                console.log(diam)
            }
        }
        return diam.join("")
    }
}
