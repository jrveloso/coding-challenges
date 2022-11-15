// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])

//array of nums? Negative? Non-integers? empty? no funny biz
//a new or modified array

function sortArray(arr) {
    //filter of odd nums -> sort
    const oddNums = arr.filter(num => num % 2 === 1).sort((a, b) => b - a)
    //map => num % 2 === 1 -> oddnum[i]
    return arr.map(num => num % 2 ? oddNums.pop() : num)
  }
  
  console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
  console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])