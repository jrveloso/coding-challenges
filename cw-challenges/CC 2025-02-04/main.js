// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

//// param
// no funny biz
// returns
// num, fizz, buzz, fizz buzz
// examples
// pseudocode

function fizzBuzz(num) {
    for(let i = 1; i <= num; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizzBuzz')
        } else if(i % 3 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(3) // 1,2,fizz
fizzBuzz(5) // 1,2,fixx,4,buzz
fizzBuzz(15) // 1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzBuzz