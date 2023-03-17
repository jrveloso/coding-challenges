const validSudoku = (board) => {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
      col = new Set(),
      box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box =
        board[3 * Math.floor(i * 3) + Math.floor(j * 3)][
          3 * Math.floor(i % 3) + Math.floor(j % 3)
        ];

      if (_row != ".") {
        if (row.has(_row)) {
          return false;
        }
      }

      if (_col != ".") {
        if (col.has(_col)) {
          return false;
        }
      }

      if (_box != ".") {
        if (box.has(_box)) {
          return false;
        }
      }
    }
    return true;
  }
};
//failed

const validSudoku = (board) => {
    for (let i = 0; i < 9; i++) {
      let row = new Set(),
        col = new Set(),
        box = new Set();
  
      for (let j = 0; j < 9; j++) {
        let _row = board[i][j];
        let _col = board[j][i];
        let _box =
          board[3 * Math.floor(i / 3) + Math.floor(j / 3)][
            3 * Math.floor(i % 3) + Math.floor(j % 3)
          ];
  
        if (_row != ".") {
          if (row.has(_row)) {
            return false;
          }
          row.add(_row)
        }
  
        if (_col != ".") {
          if (col.has(_col)) {
            return false;
          }
          col.add(_col)
        }
  
        if (_box != ".") {
          if (box.has(_box)) {
            return false;
          }
          box.add(_box)
        }
      }
      return true;
    }
  };

//counter function using a closure

const privateCounter = () => {
  let count = 0;

  return {
    increment: (val = 1) => {
      count += val;
    },
    getValue: () => {
      return count;
    },
  };
};

const counter = privateCounter();

console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());

// Remove all dupes in an arr

const removeDupes = (arr) => {
  return [...new Set(arr)];
};

//return prod of each el in array

const prod = (arr) => {
  let output = [];

  nums.reduceRight((a, b) => {
    output[i] = a;
    return a * b;
  }, 1);

  nums.reduce((a, b) => {
    output[i] *= a;
    return a * b;
  }, 1);

  return output;
};
