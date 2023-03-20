// Linked List practice
class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }
  append(element) {
    if (!this.tail) {
      this.head = this.tail = new Node(element);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(element);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }
  prepend(element) {
    if (!this.head) {
      this.head = this.tail = new Node(element);
    } else {
      let oldHead = this.head;
      this.head = new Node(element);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }
  deleteTail() {
    if (!this.tail) {
      return null;
    } else {
      let removedTail = this.tail;
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        s;
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return removedTail.value;
    }
  }
  deleteHead() {
    if (!this.head) {
      return null;
    } else {
      let removedHead = this.head;
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return removedHead.value;
    }
  }
  search(element) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === element) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}

// problem

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

const count = privateCounter();

console.log(count.getValue());
count.increment();
console.log(count.getValue());

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

const validSudoku = (board) => {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
      col = new Set(),
      box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (_row != ".") {
        if (row.has(_row)) {
          return false;
        }
        row.add(_row);
      }

      if (_col != ".") {
        if (col.has(_col)) {
          return false;
        }
        col.add(_col);
      }

      if (_box != ".") {
        if (box.has(_box)) {
          return false;
        }
        box.add(_box);
      }
    }
  }
  return true;
};

// integer arrays

const integerArr = (nums) => {
    let output = []

    nums.reduceRight((a, b, i) => {
        output[i] = a
        return a * b
    }, 1)

    nums.reduce((a, b, i) => {
        output[i] *= a
        return a * b
    }, 1)

    return output
}

// // Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example
// 5! = 5 * 4 * 3 * 2 * 1 =120.
// The value of 0! is 1.
// #Your task
// You have to create the function factorial that receives n and returns n!. You have to use recursion.

const recurse = (num) => {
    if(num < 2) {
        return 1
    }
    return num * recurse(num - 1)
}