// Data structure with classes practice
// Queue

// class Queue {
//   constructor(head, tail) {
//     this.storage = {}
//     this.head = 0
//     this.tail = 0
//   }
//   enqueue(element) {
//     this.storage[this.tail] = element
//     this.tail++
//   }
//   dequeue() {
//     let removed = this.storage[this.head]
//     delete this.storage[this.head]
//     this.head++
//     return removed
//   }
// }

class Queue {
    constructor() {
      this.storage = {}
      this.head = 0
      this.tail = 0
    }
    enqueue(value) {
      this.storage[this.tail] = value
      this.tail++
    }
    dequeue() {
      let removed = this.storage[this.head]
      delete this.storage[this.head]
      this.head++
      return removed
    }
  }
  
  // Doubly LL
  
  class LinkedList {
    constructor() {
      this.head = this.tail = null
    }
    append(value) {
      if(!this.tail) {
        this.head = this.tail = new Node(value)
      } else {
        let oldTail = this.tail
        this.tail = new Node(value)
        oldTail.next = this.tail
        this.tail.prev = oldTail 
      }
    }
    prepend(value) {
      if(!this.head) {
        this.head = this.tail = new Node(value)
      } else {
        let oldHead = this.head
        this.head = new Node(value)
        oldHead.prev = this.head
        this.head.next = oldHead 
      }
    }
    deleteHead() {
      if(!this.head) {
        return null
      } else {
        let removed = this.head
        if(this.head === this.tail) {
            this.head = this.tail = null 
        } else {
            this.head = this.head.next
            this.head.prev = null 
        }
        return removed.value
      }
    }
    deleteTail() {
      if(!this.tail) {
        return null
      } else {
        let removed = this.tail
        if(this.head === this.tail) {
            this.head = this.tail = null 
        } else {
            this.tail = this.tail.prev
            this.tail.next = null 
        }
        return removed.value
      }
    }
    search(value) {
      let currentNode = this.head
  
      while(currentNode) {
        if(currentNode.value === value) {
          return currentNode
        }
        currentNode = currentNode.next
      }
      return null
    }
  }
  
  class Node {
    constructor(prev, next, value) {
      this.value = value
      this.prev = prev || null
      this.next = next || null
      
    }
  }