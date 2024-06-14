// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
 
// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

// two pointer solution
// rectangle formula w * h
// Given array length n
// declare max area variable
// set i, j pointers at start and end
// difference between i, j indexs * Math.min(i,j)
// store in max area
// if i < j, i++
// else j--
// repeat difference and multiplication
// if > max area, maxArea = new result
// continue until finished
// return maxArea

const maxArea = (height) => {
    let max = 0
    let left = 0
    let right = height.length - 1

    while(left < right) {
        let w = right - left
        let h = Math.min(height[left], height[right])
        let product = w * h
        if(product > max) {
            max = product
        }
        if(height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return max
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]), 49)
console.log(maxArea([1,1]), 1)