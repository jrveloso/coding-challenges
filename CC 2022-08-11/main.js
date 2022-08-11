// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:/


//P(arameters)
//  string
//R(eturns)
//  modified string
//E(xamples)
//  * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//  * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
//  * url = "https://www.cnet.com"                -> domain name = cnet"
//P(seudo Code)
//  1.) When string is entered
//  2.) If string has http
//  3.) Remove from string
//  4.) Repeat step 3 if string has '://', 'www.', '.com - end of string
//  5.) Return remaining string

const domainName = url => {
    return url
        .split(".")
        .filter(string => !string.includes('www'))
        .filter((string, index) => !index >= 1)
        .join('')
        .split('/')
        .filter(string => !string.includes('http'))
        .join('')
}
