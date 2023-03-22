// Write a function which can concatenate 2 arrays

// arr, arr1 => newArr
// [1,2,3], [4, 5, 6] => [1,2,3,4,5,6]
// [0], [1] => [0, 1]

const concat = (arr, arr2) => {
  return [...arr, ...arr2];
};

console.log(concat([1,2,3], [4, 5, 6]), [1,2,3,4,5,6])
console.log(concat([0], [1]), [0, 1])
