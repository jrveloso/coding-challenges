// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// integer -> integer

// 2 * 8 => 16
// 9 * 9 => 81

const simpleMultiplication = number => number % 2 === 0 ? number * 8 : number * 9