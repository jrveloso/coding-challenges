// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

//P(arameters)
//  string
//R(eturns)
//  modified string
//E(xamples)
//  "www.codewars.com#about" --> "www.codewars.com"
//  "www.codewars.com?page=1" -->"www.codewars.com?page=1"
//P(seudo Code)
//  1.) When given a string
//  2.) Split string into array
//  3.) Find index of '#'
//  4.) Remove all elements from that index to end of array
//  5.) Join array
//  6.) Return string

function removeUrlAnchor(url){
    url = url.split("")
    if(url.includes('#')) {
        const poundIndex = url.indexOf('#')
        url.splice(poundIndex)
    } else if(url.includes('?')) {
        const queryIndex = url.indexOf('?')
        url.splice(queryIndex)
    }
    return url.join("")
}