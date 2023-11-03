// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// Example:

// calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"
// Good luck!

// 2 integers & +, -, *, / -> integer OR "unknown value"

function calculator(a,b,sign) {
    // if a AND B are integers
    // if sign is one of "+", "-", "*", "/"
    // return result
    let result = "unknown value"
    if(Number.isInteger(a) && Number.isInteger(b)) {
        switch(sign) {
            case "+": 
                result = a + b;
                break;
            case "-": 
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                result = a / b;
                break;
        }
    }
    return result
}

console.log(calculator(1,2,"+"), 3)
console.log(calculator(1,2,"&"), "unknown value")
console.log(calculator(1,"k","*"), "unknown value")