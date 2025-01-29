// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// array -> string
// [ 'assume', 'assuage', 'assimilate' ] -> 'ass'
// [ 'concieve', 'concierge', 'concert' ] -> 'con'
// [ 'bread', 'eliminate', 'cellular' ] -> ''

// create a common variable -> boolean = true
// create a prefix variable -> ''
// create first word variable -> a[0]
// loop the first word
// loop a
// if word[i] === a[j][i]
// concat to prefix variable
// else boolean = false -> return prefix

function longestCommonPrefix(a) {
  let bool = true;
  let prefix = "";
  let first = a[0];

  for (let i = 0; i < first.length; i++) {
    if (bool === false) {
      return prefix ;
    }
    for (let j = 1; j < a.length; j++) {
      if (first[i] !== a[j][i]) {
        bool = false;
        return prefix
      } else if (j === a.length - 1) {
        if (bool === true) {
          prefix = prefix + first[i];
        }
      }
    }
  }
}

console.log(longestCommonPrefix(["assume", "assuage", "assimilate"]), "ass");
console.log(longestCommonPrefix([ 'concieve', 'concierge', 'concert' ]), 'conc')
console.log(longestCommonPrefix([ 'bread', 'eliminate', 'cellular' ]), '')
