// Sum of Pairs

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * the correct answer is the pair whose second value has the smallest index
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

// array of integers, integer -> array
// [11, 3, 7, 5], 10 -> [3, 7]
// [4, 3, 2, 3, 4], 6 -> [4, 2]
// [0, 0, -2, 3], 2 -> undefined
// [10, 5, 2, 3, 7, 5], 10 -> [3, 7]

// create an object 'pairs'
// loop ints
// check for first pair and store in variable
// slice array until second value of first pair
// check for another pair
// if second value index is lower, replace variable with new pair
// repeat until list is exhausted
// return pair

// function sumPairs(ints, s) {
//   let pair = [];

//   for(let i = 0; i < ints.length; i++) {
//     for(let j = i + 1; j < ints.length; j++) {
//         if(ints[i] + ints[j] === s) {
//             pair.push([ints[i], i], [ints[j], j])
//             break
//         }
//     }
//     if(pair.length > 0) {
//         console.log('hii')
//         const newInts = ints.slice(i, pair[1][1])
//         for(let k = newInts.length - 1; k > i; k--) {
//             console.log(i, k)
//             if(ints[i] + newInts[k] === s) {
//                 console.log('hi')
//                 if(k < pair[1][1]) {
//                     pair = [[ints[i], i], [newInts[k], k]]
//                     break
//                 }
//             }
//         }
//         break
//     }
//   }
//   while(pair[0][1])
//   return pair.length > 0 ? [pair[0][0], pair[1][0]] : undefined
// }

// function sumPairs(ints, s) {
//   let pair = [];
//   for (let i = 0; i < ints.length; i++) {
//     if (pair.length === 0) {
//       for (let j = i + 1; j < ints.length; j++) {
//         if (ints[i] + ints[j] === s) {
//           pair.push([ints[i], i], [ints[j], j]);
//           break;
//         }
//       }
//     }
//     if (pair.length > 0) {
//       if (i >= pair[1][1]) {
//         break;
//       }
//       for (let k = pair[1][1]; k > i; k--) {
//         if (ints[i] + ints[k] === s) {
//           if (k < pair[1][1]) {
//             pair = [
//               [ints[i], i],
//               [ints[k], k],
//             ];
//             break;
//           }
//         }
//       }
//     }
//   }
//   return pair.length > 0 ? [pair[0][0], pair[1][0]] : undefined;
// }

const sumPairs = function (ints, s) {
  const seen = {};
  for (let i = 0; i < ints.length; i++) {
    if (seen[s - ints[i]]) {
        return [s - ints[i], ints[i]];
    }
    seen[ints[i]] = true;
  }
};

// If the sum minus current integer equals an already saved (seen) value, return [sum - integer, current integer]. 

console.log(sumPairs([11, 3, 7, 5], 10), [3, 7]);
console.log(sumPairs([4, 3, 2, 3, 4], 6), [4, 2]);
console.log(sumPairs([0, 0, -2, 3], 2), undefined);
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7]);
