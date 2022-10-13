// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

//P(arameters)
//  sequence, string or array
//R(eturns)
//  array of elements
//E(xamples)
//  uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//  uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
//  uniqueInOrder([1,2,2,3,3])       == [1,2,3]
//P(seudo Code)
//  1.) When a sequence is provided to function
//  2.) Check if it's an array
//  3.) If not, turn into array
//  4.) If so, loop through array and add element to empty array if it is a different value from the    previous element
//  5.) Return the array

function uniqueInOrder(iterable) {
    if(!Array.isArray(iterable)) {
        iterable = iterable.split("")
    }

    return iterable.filter((element, index) => element !== iterable[index + 1])
}
