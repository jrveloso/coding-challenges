// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
// For Example:
// domainName('http://github.com/carbonfive/raygun') == 'github'
// domainName('http://www.zombie-bites.com') == 'zombie-bites'
// domainName('https://www.cnet.com') == 'cnet'

// string -> string

// if s includes 'http://' || 'https://' -> replace with ''
// if s includes 'www.' -> replace with ''
// search for '.' lastIndexOf -> .slice(0, i)

function domainName(s) {
  // console.log(s.includes('http://'))
  // if(s.includes('https://')) {
  //     s = s.replace('https://', '')
  // } else if(s.includes('http://')) {
  //     s = s.replace('http://', '')
  // }
  // if(s.includes('www.')) {
  //     s = s.replace('www.', '')
  // }
  // const i = s.lastIndexOf('.')
  // return s.slice(0, i)
  return s.replace("https://", "").replace("http://", "").replace('www.','').split(".")[0];
}

console.log(domainName("http://github.com/carbonfive/raygun"), "github");
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites");
console.log(domainName("https://www.cnet.com"), "cnet");
