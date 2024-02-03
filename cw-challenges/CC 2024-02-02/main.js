// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

const reverse = function (array) {
  let arr = []
  array.forEach(el => arr.unshift(el))
  return arr
};

console.log(reverse([1, 2, 3]), [3, 2, 1]);
console.log(reverse([1, null, 14, "two"]), ["two", 14, null, 1]);
