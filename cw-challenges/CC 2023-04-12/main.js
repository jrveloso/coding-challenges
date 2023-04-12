// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// array: integers -> array: integers

// Map array
// If empty return empty array
// If > 0, return num negative
// If < 0, return positive num

function invert(array) {
    if(!array) {
        return []
    } else {
        return array.map((num) => {
            if (num > 0) {
              return -num;
            } else if (num < 0) {
              return Math.abs(num);
            } else {
              return 0;
            }
          });
    }
}

console.log(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5])
console.log(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5])
console.log(invert([-1,-2,-3,-4,-5]), [-1,2,-3,4,-5])
console.log(invert([]), [])