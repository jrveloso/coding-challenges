// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

//P(arameters)
//  nFloors --> positive integer
//R(eturns)
//  array holding nFloors  of "*", each consecutive integer adding 2 "*"
//E(xamples)
//  For example, a tower with 3 floors looks like this:
//  [
//    "  *  ",
//    " *** ", 
//    "*****"
//  ]
// And a tower with 6 floors looks like this:
//  [
//    "     *     ", 
//    "    ***    ", 
//    "   *****   ", 
//    "  *******  ", 
//    " ********* ", 
//    "***********"
//  ]
//P(seudo Code)
//  1.) When nFloors is provided
//  2.) Create empty array to hold "*"
//  3.) Insert an element with "*"
//  4.) Add "**" to string
//  5.) Repeat until nFloors is reached
//  6.) Return array

let string = "poop"
string = Array.from('poop')
console.log(string)

function towerBuilder(nFloors) {    
    let tower = []
    let block = "*"

    for(let i = 0; i < nFloors; i++) {        
        tower[i] = block        
        block += "**"
        if(tower.length > 1) {            
            tower = tower.map((item, index) => {
                if(index + 1 !== tower.length) {
                    tower[index] = Array.from(item)
                    tower[index].unshift(" ")
                    tower[index].push(" ")

                    return tower[index].join("")    
                } else {
                    return item
                }
            })
        }
    }
    return tower
}
