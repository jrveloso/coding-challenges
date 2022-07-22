// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.


//P(arameters)
//  l, w
//R(eturns)
//  area or perimeter
//E(xamples)
//  6, 10 --> 32
//  3, 3 --> 9
//P(seudo Code)
//  1.) When l and w are entered
//  2.) If l === w, return l * w
//  3.) If l !== w, return (2 * l) + (2 * w)

const areaOrPerimeter = (l , w) => l === w ? l * w : (2 * l) + (2 * w)