// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//P(arameters)
//  array of 1 letter strings
//R(eturns)
//  true or false
//E(xamples)
//  ['n','s','n','s','n','s','n','s','n','s'] ==> true
//  ['w','e','w','e','w','e','w','e','w','e','w','e'] ==> false
//P(seudo Code)
//  1.) When given an array of directions
//  2.) If string is longer or shorter than 10
//  3.) Return false
//  4.) If n exists same # of time as s AND
//  5.) If e exists same # of time as w
//  6.) Return true
//  7.) Else return false

function isValidWalk(walk) {
    const north = walk.filter(dir => dir === 'n')
    const south = walk.filter(dir => dir === 's')
    const west = walk.filter(dir => dir === 'w')
    const east = walk.filter(dir => dir === 'e')
    
    return walk.length === 10 && (north.length === south.length && west.length === east.length) ? true : false
}