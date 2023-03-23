// Write a function which get's an array and an element and returns a array with this element at the end
// arr and value => arr

// [1,2,3,4], 5 => [1, 2, 3, 4, 5]
// [0], 4 => [0,4]

const appendArr = (arr, value) => {
  return [...arr, value];
};

console.log(appendArr([1,2,3,4], 5), [1, 2, 3, 4, 5])
console.log(appendArr([0], 4), [0,4])
