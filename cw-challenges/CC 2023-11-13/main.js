// Task

// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes

// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples

// minSum({5,4,2,3}) ==> return (22)

// array -> integer
// [ 5,4,2,3 ] -> 22
// [ 12,6,10,26,3,24 ] -> 342
// [ 9,2,8,7,5,4,0,6 ] -> 74

function minSum(arr) {
  return arr
    .sort((a, b) => a - b)
    .slice(0, arr.length / 2)
    .reduce(
      (a, c, i) => (a += c * arr[arr.length - i - 1]),
      0
    );
}
