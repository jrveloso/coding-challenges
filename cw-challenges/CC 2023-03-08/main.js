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
  prepend() {
    if (!this.head) {
      this.head = this.tail = new Node(element);
    } else {
      let oldHead = this.head;
      this.head = new Node(element);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }
  deleteHead() {
    if (!this.head) {
      return null;
    } else {
      let removed = this.head;
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return removed.value;
    }
  }
  deleteTail() {
    if (!this.tail) {
      return null;
    } else {
      let removed = this.tail;
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return removed.value;
    }
  }
  search(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
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
