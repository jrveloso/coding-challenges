// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  let array = [];

  for (let i = 0; i < a.length; i++) {
    if (!array.includes(a[i])) {
      array = [...array, a[i]];
    }
  }
  return array;
}
