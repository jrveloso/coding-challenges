// A latin square is an n × n array filled with the integers 1 to n, each occurring once in each row and column.

// Here are examples of latin squares of size 4 and 7:

// [[1, 4, 3, 2],      [[2, 3, 1, 7, 4, 6, 5], 
//  [4, 3, 2, 1],       [7, 1, 6, 5, 2, 4, 3], 
//  [3, 2, 1, 4],       [6, 7, 5, 4, 1, 3, 2], 
//  [2, 1, 4, 3]]       [4, 5, 3, 2, 6, 1, 7], 
//                      [5, 6, 4, 3, 7, 2, 1], 
//                      [1, 2, 7, 6, 3, 5, 4], 
//                      [3, 4, 2, 1, 5, 7, 6]]
// Latin squares have many practical uses, for example in error-correcting-codes and the design of agricultural experiments.

// Task: Write a function that returns a latin square for any positive integer n.

// number -> array
// loop -> n iterations
// set return array[n][Math.flat(Math.random(n) * 10)]
// if true redo

function makeLatinSquare(n) {
    let square = new Array(n).fill(0).map(() => new Array(n).fill(0))

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            square[i][j] = ((i + j) % n) + 1
        }
    }

    return square
}

console.log(makeLatinSquare(), )
console.log(makeLatinSquare(), )