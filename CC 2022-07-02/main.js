// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:


//P(aramters)
//  array of names
//R(eturns)
//  array elements + "likes this"
//E(xamples)
//  []                                -->  "no one likes this"
//  ["Peter"]                         -->  "Peter likes this"
//  ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//  ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//  ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
//P(seudo Code)
//  1.) When an array is entered
//  2.) Check if array elements exist
//  3.) If nothing, return "no one likes this"
//  4.) If 1 name return name + "likes this"
//  5.) If 3 names or less, name ", " name "and" name "like this"
//  6.) If more than 3 names, return name ", " name and number "others like this"



function likes(names) {
    if(!names[0]) {
        return "no one likes this"
    } else {
        if(names.length === 1) {
            return `${names[0]} likes this`
        } else if (names.length <= 2) {
            return `${names[0]} and ${names[1]} like this`
        } else if (names.length <= 3) {
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
        } else if (names.length > 3) {
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
        }
    }
}