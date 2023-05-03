// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example

// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0

function sumOfDifferences(arr) {
  const desc = arr.sort((a, b) => b - a);
  let resultsArr = [];

  for (let i = 1; i < arr.length; i++) {
    resultsArr.push(desc[i - 1] - desc[i]);
  }
  console.log(resultsArr)
  return resultsArr.reduce((a, c) => a + Number(c), 0);
}

console.log(sumOfDifferences([2, 1, 10]), 9)