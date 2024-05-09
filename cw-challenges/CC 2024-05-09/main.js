// Common denominators

// You will have a list of rationals in the form

// [ [numer_1, denom_1] , ... [numer_n, denom_n] ]

// where all numbers are positive ints. You have to produce a result in the form:

// [ [N_1, D] ... [N_n, D] ]

// Example:

// convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
// Note:

// divide arr[2][2] by arr[0][2] and arr[1][2]
// if both results are integers -> return arr
// else multiply arr[2][2] by next increment and loop first 2 steps until both results are integers
// return

function convertFrac(lst) {
  let i = 1;
  let denoms = lst.map(el => el[1])
  let lgstDenom = Math.max(...denoms) * i;
  let integers = false;
  let a = lst.map((el) => lgstDenom / el[1]);

  while (integers === false) {
    if (a.every((n) => Number.isInteger(n))) {
      integers = true;
    } else {
      i = i + 1;
      lgstDenom = lst[lst.length - 1][1] * i;
      a = lst.map((el) => lgstDenom / el[1]);
    }
  }
    let result = lst.map((el, ind) => [el[0] * a[ind], el[1] * a[ind]]);
    let string = ""
    for(let i = 0; i < result.length; i++) {
        let block = `(${result[i][0]},${result[i][1]})`
        string = string + block
    }
    return string
}

console.log(
  convertFrac([
    [1, 2],
    [1, 3],
    [1, 4],
  ]),
  [
    [6, 12],
    [4, 12],
    [3, 12],
  ]
);
