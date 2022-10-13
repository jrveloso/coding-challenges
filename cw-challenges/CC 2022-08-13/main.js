// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

//P(arameters)
//  string
//R(eturns)
//  string w/o number at end ---> return with 1 at end
//  string w/ number at end ---> return with increment number
//E(xamples)
//  foo -> foo1
//  foobar23 -> foobar24
//  foo0042 -> foo0043
//  foo9 -> foo10
//  foo099 -> foo100
//P(seudo Code)
//  1.) When string is entered
//  2.) Split string into array
//  3.) If last element in array is an integer after conversion check by isNaN 
//  4.)     Loop from starting from END of array
//  5.)         If current element (i) is an integer after conversion by isNaN
//  6.)             Store integer value in num variable
//  7.)             If value of num is not equal 9
//  8.)                 Replace element at index i with num value incremented and converted to string
//  9.)                 Break for loop and skip to Step 16 
//  10.)             If 9, replace current element at index i with '0', go back to Step 5
//  11.)        Else If previous element was integer after conversion by isNaN AND if it is '0'
//  12.)            If so, insert '1' at i + 1
//  13.)        Else break loop and skip to step 16
//  14.) Else, if last element in array is NaN
//  15.)    Add '1' to end of array
//  16.) Return string rejoined

function incrementString (string) {
    string = string.split('')
    
    if(isNaN(string[string.length - 1]) === false) {       
        for(let i = string.length - 1; i >= 0; i--) {
            if(isNaN(string[i]) === false) {
                let num = +string[i]

                if(num !== 9) {
                    string.splice(i, 1, (++num).toString())
                    break
                }
                string.splice(i, 1, '0')                           
            } else if (isNaN(string[i + 1]) === false && string[i + 1] === '0') {           
                string.splice(i + 1, 0, '1')                           
            } else {           
                break
            }
        }   
    } else {       
        string.push('1');        
    }   
    return string.join('');
}