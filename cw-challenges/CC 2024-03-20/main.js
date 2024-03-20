// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// array -> integer

// map arr and store
// filter for odds
// reduce and return

function cubeOdd(arr) {
  if (!arr.every((num) => Number.isInteger(num))) {
    return undefined;
  }
  let cubeArr = arr.map((num) => Math.pow(num, 3));
  return cubeArr
    .filter((num) => Math.abs(num % 2) === 1)
    .reduce((a, c) => a + c, 0);
}

console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3, -2, 2, 3]), 0);
console.log(cubeOdd(["a", 12, 9, "z", 42]), undefined);
