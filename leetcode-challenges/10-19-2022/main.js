const isPalindrome = function(s) {
    //convert string to lowercase
    //remove all non-alphabet characters
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '0', '1', '2','3','4','5','6','7','8','9']
    const string = s.toLowerCase().split("").filter(letter => alphabet.includes(letter)).join("")
    const reverse = s.toLowerCase().split("").reverse().filter(letter =>  alphabet.includes(letter)).join("")
    
    return string === reverse
};

console.log(isPalindrome("0P"))
console.log(isPalindrome("A man, a plan, a canal: Panama"), true)
console.log(isPalindrome("race a car"), false)
console.log(isPalindrome(" "), true)