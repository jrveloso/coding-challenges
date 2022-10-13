// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//P(arameters)
//  array of letters
//R(eturns)
//  true or false
//E(xamples)
//  'n','s','n','s','n','s','n','s','n','s', 'should return true'
//  'w','e','w','e','w','e','w','e','w','e','w','e', 'should return false'
//  'w', 'should return false'
//  'n','n','n','s','n','s','n','s','n','s', 'should return false'
//P(seudo Code)
//  1.) When given an array of letters
//  2.) Check length
//  3.) If !== 10
//  4.) return false
//  5.) Else check if each successive element cancels the other
//  6.) If so return true
//  7.) Else return false

function isValidWalk(walk) {
    if(walk.length !== 10) {
        return false
    } else {
        const n = walk.sort().filter(letter => letter === 'n')
        const s = walk.filter(letter => letter === 's')
        const e = walk.filter(letter => letter === 'e')
        const w = walk.filter(letter => letter === 'w')
        return (n.length === s.length && e.length === w.length) ? true : false
    }
}