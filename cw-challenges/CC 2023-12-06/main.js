// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

// r = A / 90
// area = r ** 2

const squareArea = (A) =>  Math.pow(A / (90 * (Math.PI/180)), 2)