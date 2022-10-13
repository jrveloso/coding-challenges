// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// ###Arguments (Haskell)

// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// ###Arguments (Other languages)

// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

//P(arameters)
//  string ---> title
//  string ---> minorWords
//R(eturns)
//  title modified into title case ---each word matching a string in minorWords should be lower case
//E(xamples)
//  titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
//  titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
//  titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
//P(seudo Code)
// 1.) When a title and minorWords are given
// 2.) If no minorWords, return title capitalized
// 3.) Else split title into array of words
// 4.) Starting with first word
// 5.) If index === 0, captilize first letter of word and lowercase every letter 
// 6.) Else check if word in array matches minorWords
// 7.) If true, make first letter lowercase and make rest of them lowercase
// 8.) If false, make first letter uppercase and rest lowercase
// 9.) Return word


function titleCase(title, minorWords = '') {
    if(!minorWords) {                
        return title.split(" ").map((word, index) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
    } else {
        minorWords = minorWords.split(" ").map(word => word.toLowerCase())        
        return title.split(" ").map((word, index) => {            
            if(index === 0) {                
                return word[0].toUpperCase() + word.slice(1).toLowerCase()
            } else if(minorWords.includes(word.toLowerCase())) {                
                return word[0].toLowerCase() + word.slice(1).toLowerCase()
            } else {                
                return word[0].toUpperCase() + word.slice(1).toLowerCase()
            }
        }).join(" ")
    }
}
