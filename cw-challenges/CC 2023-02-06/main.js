// Wait, what?

// To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
// To dequeue an item means means to remove the item at the front, or head, of the queue.
// In a queue, we remove the item the least recently added.
// JavaScript Methodology

// Queues can be implemented in JavaScript using arrays.

// You can use the built in push or unshift functions in order to add items to the queue array as well as the shift or pop to remove them.

// As long as the tests pass, go for it!

// const arr = []

// var Queue = function() {
//   // implement your Queue constructor here
// };

// Queue.prototype.enqueue = function(item) {
//   // add item to the queue
//   arr.push(item)
// };

// Queue.prototype.dequeue = function() {
//   // remove item from the front of the queue and return its value
//   arr.shift()
// };

// Queue.prototype.size = function() {
//   // return number of items in queue so far
//   return arr.length
// };

class Queue {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }
    enqueue(element) {
        this.storage[this.tail] = element
        this.tail++
    }
    dequeue() {
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }
}