// 2 integers -> sorted array
// Examples:
// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// 1, 136 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 140]

// Given 2 integers defining a range
// Filter through each number:
// Return if the sum of digits raised to consecutive powers are equal to the original number
// Return the sorted list

function sumDigPow(a, b) {
  let eurekas = [];
  for (let i = a; i <= b; i++) {
    if (i > 9) {
      let sumOfDigits = i
        .toString()
        .split("")
        .map((num, i) => Math.pow(Number(num), i + 1))
        .reduce((a, b) => a + b, 0);
      if (sumOfDigits === i) {
        eurekas.push(sumOfDigits);
      }
    } else {
        let digitToFirst = Math.pow(i, 1)
      if (digitToFirst === i) {
        eurekas.push(digitToFirst);
      }
    }
  }
  return eurekas;
}

// console.log(sumDigPow(1, 10))
console.log(sumDigPow(1, 100));
// console.log(sumDigPow(1, 136))
