// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//P(arameters)
//  array of strigns
//R(eturns)
//  string
//E(xamples)
//  ['bad', 'bad', 'bad'] ==> 'Fail!'
//P(seudo Code)
//  1.) When given an array of strings
//  2.) If good is in array once or twice
//  3.) Return publish
//  4.) If good > 2, return I smell a series
//  5.) If good === 0, return fail

function well(x){
    let count = x.filter(word => word === 'good')
    if(!count.length) {
        return 'Fail!'
    } else if(count.length <= 2) {
        return 'Publish!'
    } else {
        return 'I smell a series!'
    }
}