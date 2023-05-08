// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

// n: integer -> array
// example: 3 -> [[1,2,3],[2,4,6],[3,6,9]]
// example: 5 -> [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15][16,17,18,19,20],[21,22,23,24,25]]
// example: 2 -> [[1,2],[3,4]]

// Given integer n
// Create empty array
// Loop n times -> loop within
// Check if first loop -> start at 1 and create array n times
// Start at 1 and fill n times

multiplicationTable = function(size) {
    // insert code here
    let table = []

    for(let i = 0; i < size; i++) {
        let arr = []
        if(i === 0) {
            for(let j = 0; j < size; j++) {
                arr[j] = j + 1
            }
            table.push(arr)
        } else {
            for(let k = 0; k < size; k++) {
                arr[k] = (k + 1) * (i + 1)
            }
            table.push(arr)
        }
    }
    return table
}

console.log(multiplicationTable(5))