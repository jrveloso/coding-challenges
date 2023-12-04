// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:

// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// 1 + 8 + 27 + 64 +125 + 216
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".

// string, integer -> string


function revrot(str, sz) {
    // if sz <= 0, str is empty, or sz > str.length, return ""
    if (sz <= 0 || !str || sz > str.length) return '';    
      
    // create 3 functions
    // sumCubes -> split chunk -> get sum of cubes
    const sumCubes = chunk => chunk.split('').reduce((sum, digit) => sum += digit**3, 0);
    // reverse -> split chunk -> reverse & join
    const reverse = chunk => chunk.split('').reverse().join('');
    // rotate all digits 1 space to left
    const rotate = chunk => chunk.slice(1) + chunk.slice(0, 1);
    
    // create chunks array
    const chunks = [];
    
    // loop length of str, incrementing i by sz
    for (let i = 0; i < str.length; i += sz) {
        // slice sz of str and store in chunk
      let chunk = str.slice(i, i + sz);
      
      // if chunk < sz continue to next iteration of loop
      if (chunk.length < sz) continue;
      
      // if sum of cubes is divisible by 2, call rotate, else call reverse
      chunk = sumCubes(chunk) % 2 
        ? rotate(chunk)   
        : reverse(chunk);
      // push to chunks array
      chunks.push(chunk)
    }
    
    return chunks.join('')
}

console.log(revrot("123456987654", 6), "234561876549")
// console.log(revrot("66443875", 4), "44668753")
// console.log(revrot("66443875", 8), "64438756")
// console.log(revrot("", 8), "")
// console.log(revrot("123456779", 0), "")
// console.log(revrot("563000655734469485", 4), "0365065073456944")