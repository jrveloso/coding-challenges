// Put in anki. Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
//filter is common in interviews
//this problem is a big on understanding what parameters will be
//arr empty?
//arr always have at least set of elements == num
//will arr elements ever be non numbers? negative? floated? look like numbers but not actually numbers?
//Leon: interviewers only give 2 examples usually
//Leon likes to create 1 more of his own design, shows understanding of problem
//Remove stuff in array? filter ding ding ding

// For example:
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

//array, never empty, will always contain even numbers, and number
//new array

function evenNums(arr, num) {
    //filter out odd nums
    //n last nums from the filtered array
    //for - grabbing even nums 0(n)
    //for - grab total from right 0(n)
      return arr.filter(number => number % 2 === 0).slice(-num)
  }
  
  console.log(nEvenNums([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8])
  console.log(nEvenNums([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26])
  console.log(nEvenNums([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6])