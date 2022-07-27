// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

//P(aramters)
//  string
//R(eturns)
//  sorted string
//E(xamples)
//  "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//  "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
//  ""  -->  ""
//P(seudo Code)
//  1.) When a string is entered
//  2.) Split into array of words
//  3.) Pull integer from words and store in new array
//  4.) Sort array
//  5.) Check each integer in new array if number exists in any word from word array
//  6.) Move to new array 
//  7.) Join and return new string

function order(words) {
    let sortedArray = []
    //Split into array of single characters
    words = words.split('')
    //Pull string number from words and store in new array
    let nums = words
                .filter(element => Number(element))
                //convert string num to integer and sort array
                .map(number => Number(number))
                .sort((a, b) => a - b)
    //Join words array and split into array of words
    words = words.join('').split(' ')
    //Iterate through nums
    nums.forEach((number, index) => {
        //iterate each element in words array
        words.forEach((word, i) => {
            //if element includes number string
            if(word.includes(number.toString())) {
                //assign sorted array element at index given in filter to word
                sortedArray[index] = word
            }
        })
    })
    return sortedArray.join(' ')

}
