// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
// ["WEST"]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [].
// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// Notes
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].

//P(aramters)
//  array of strings
//R(eturns)
//  array with canceled out directions removed
//E(xamples)
//  ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"] ----> ["WEST"]
//  ["NORTH", "SOUTH", "EAST", "WEST"] ----> ["EAST", "WEST"] ----> []
//  ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"] ----> ["WEST", "WEST"]
//P(seudo Code)
//  1.) When array of strings is entered
//  2.) Reduce array
//  3.) Repeat until unable
//  4.) Return 

function dirReduc(arr){
    for(let i = 0; i < arr.length; i++) {
        arr.forEach((direction, index) => {
            if(direction === "NORTH" && arr[index + 1] === "SOUTH") {
                arr.splice(index, 2)
            } else if(direction === "SOUTH" && arr[index + 1] === "NORTH") {
                arr.splice(index, 2)
            } else if(direction === "EAST" && arr[index + 1] === "WEST") {
                arr.splice(index, 2)
            } else if(direction === "WEST" && arr[index + 1] === "EAST") {
                arr.splice(index, 2)
            }
        })
    }
    return arr
}
