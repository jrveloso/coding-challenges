// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//P(arameters)
//  s1 and s2
//R(eturns)
//  s3
//  longest
//E(xamples)
//  a = "xyaabbbccccdefww"
//  b = "xxxxyyyyabklmopq"
//  longest(a, b) -> "abcdefklmopqwxy"
//  a = "abcdefghijklmnopqrstuvwxyz"
//  longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
//P(seudo Code)
//  1.) When a user enters s1 and s2 into function call
//  3.) Concatenate both strings into s3
//  4.) Split s3 into an array
//  5.) Sort s3
//  6.) Filter through s3
//  7.) Include filtered element if it does not equal the element in the index before it
//  8.) Join the s4 array and return the new string

function longest(s1, s2) {
    let s3 = s1 + s2;
    let s4 = s3.split("");
    s4 = s4.sort().filter(function(element, index, array){
      return element !== array[index - 1];
    });
    return s4.join("");
}