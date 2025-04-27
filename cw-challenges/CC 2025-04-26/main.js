// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// array of integers -> return an integer
// hash map
// Create obj
// Create most variable
// loop array
// if the number doesn't exist in the obj, add and make prop 1
// if it does, increment
// loop object
// if value is greater than most, reassign to current [key, value]
// if value is equal, chekc key > key
// return most[0]

function highestRank(arr){
    const obj = {}
    let most = [0, 0]

    for(let i = 0; i < arr.length; i++) {
        obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1
    }
    
    for(const [key, value] of Object.entries(obj)) {
        if(value > most[1]) {
            most = [key, value]
        } else if (value === most[1]) { 
            if(Number(key) > Number(most[0])) {
                most = [key, value]
            }
        }
    }
    return Number(most[0])
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]), 12)
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]), 12)
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]), 3)