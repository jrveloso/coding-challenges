// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

//  output
//      The function should return an integer, the total time required.
//      Important
//      Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.


//P(aramters)
//      customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//      n: a positive integer, the number of checkout tills.
//R(eturns)
//  
//E(xamples)
//  queueTime([5,3,4], 1)
//      should return 12
//      because when there is 1 till, the total time is just the sum of the times
//  queueTime([10,2,3,3], 2)
//      should return 10
//      because here n=2 and the 2nd, 3rd, and 4th people in the 
//      queue finish before the 1st person has finished.
//  queueTime([2,3,10], 2)
//      should return 12
//P(seudo Code)
//  1.) Move n elements from customers and store in new array tillsInUse
//  2.) Add next element in customers to lowest of n elements in tillsInUse
//  3.) Repeat step 2 until all elements in array are taken
//  4.) Return highest element of n elements

function queueTime(customers, tills) {
    if(!customers.length) {
        return 0
    } else {
        let tillsInUse = customers.filter((element, index) => {    
            if(index < tills) {        
                return element
            }
        })
        customers.splice(0, tillsInUse.length)        
        for(let i = 0; i < customers.length; i++) {
            tillsInUse.sort((a, b) => a - b)    
            tillsInUse[0] += customers[i]    
            tillsInUse.sort((a, b) => a - b)
        }
        return tillsInUse.pop()
    }
}
