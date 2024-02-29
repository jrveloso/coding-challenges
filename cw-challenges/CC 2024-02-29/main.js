// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples

// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer

// map arr with every value as a string
// join
// convert to num
// add 1
// convert to string
// split
// map -> convert all to nums

// function upArray(arr) {
//   if (arr.length === 0) {
//     return null;
//   }
//   if (arr.find((el) => el < 0)) {
//     return null;
//   }
//   if (arr[0] === undefined) {
//     return null;
//   }
//   let nums = arr.map((num) => String(num));
//   let upNum = Number(nums.join("")) + 1;
//   let stringUpNum = String(upNum);
//   if (arr[0] === 0) {
//     stringUpNum = "0" + stringUpNum;
//   }
//   return stringUpNum.split("").map((num) => Number(num));
// }

function upArray(arr) {
    if (typeof arr === "undefined" || arr === null || arr.length === 0) {
      return null;
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0 || typeof arr[i] !== "number" || arr[i] > 9) {
        return null;
      }
    }
    // if its 9 and more than one digit we have to check all previous digits
    // whether they are also a 9
    for (let j = arr.length - 1; j > -1; j--) {
      if (arr[j] !== 9) {
        arr[j] = arr[j] + 1;
        break;
      } else {
        arr[j] = 0;
      }
  
      if (j === 0) {
        arr.unshift(1);
      }
    }
  
    return arr;
  }

// console.log(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
// console.log(upArray([2, 3, 9, 9]), [2, 4, 0, 0]);
// console.log(upArray([9, 9]), [1, 0, 0]);
// console.log(upArray([0, 7]), [0, 8]);
// console.log(
//   upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1]
// );