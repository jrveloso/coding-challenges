//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determing if a character is a duplicate

//Examples
//"din" => "((("
//"recede" => "()()()"
//"Success" => ")())())"
//"(( @" => "))(("

//Any UTF value?
//Ignore capitals
//move through a return something new --> .map

function encodeDupes(str){
    //toLowerCase
    //split -> map -> indexOf === lastIndexOf ? "(" : ")"
    //join
    return str.toLowerCase()
              .split("")
              .map((l,i,a) => a.indexOf(l) === a.lastIndexOf(l) ? "(" : ")" )
              .join("")
  }
  
  console.log(encodeDupes("din"), "(((")
  console.log(encodeDupes("recede"), "()()()")
  
  //optimization
  //2 pass solution
  //1st: count number of characters
  //create object 
  //2nd: return open and close
  
  