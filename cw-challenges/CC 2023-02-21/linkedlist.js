class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }
  append(value) {
    // empty
    if (!this.tail) {
      // set both head and tail to Node
      this.head = this.tail = new Node(value);
    } else {
      // set prev tail
      let oldTail = this.tail;
      // use Node class to set current tail
      this.tail = new Node(value);
      // point old tail's next tail to this.tail
      oldTail.next = this.tail;
      // point current tail's prev tail to oldTail
      this.tail.prev = oldTail;
    }
  }
  prepend(value) {
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      // assign oldHead to current head
      let oldHead = this.head;
      // change current head to new Node value
      this.head = new Node(value);
      // point oldHead prev property new value in this.head
      oldHead.prev = this.head;
      // point next property to oldHead
      this.head.next = oldHead;
    }
  }
  deleteHead() {
    // check if list is empty, set to null if so
    if (!this.head) {
      return null;
    } else {
      // store this.head in removedHead
      let removedHead = this.head;
      // if one node in list, return null
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        // > 1 node, set this.head to next head and prev property to null
        this.head = this.head.next;
        this.head.prev = null;
      }
      // return value
      return removedHead.value;
    }
  }
  deleteTail() {
    if (!this.tail) {
      return null;
    } else {
      let removedTail = this.tail;
      if (this.tail === this.head) {
        this.head = this.tail = null;
      } else {
        // set this.tail to prev value
        this.tail = this.tail.prev;
        // set .next value to null
        this.tail.next = null;
      }
      // return removed value
      return removedTail.value;
    }
  }
  search(value) {
    // set searched value to this.head
    let currentNode = this.head;
    // loop through list values
    while(currentNode) {
        // if current value === to arg value return
        if(currentNode.value === value) {
            return currentNode
        }
        // assign searched value to next pointed value
        currentNode = currentNode.next
    }
    // return null if nothing found
    return null
  }
}

class Node {
    // create Node class storing current value, and previous and next values
  constructor(value, prev, next) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
  }
}
