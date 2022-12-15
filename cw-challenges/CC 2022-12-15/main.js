// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

function twoSum(arr, sum) {
    //create hashmap
    let map = {},
      pairs = []
    //loop arr -> return arr of number pairs that add to given sum
    for (const num of arr) {
      const num2 = sum - num
      if(map[num2]) {
        pairs.push([num, num2])
      } else {
        map[num] = 1
      }
    }
    console.log(map)
    return pairs
  }
  
  console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]])