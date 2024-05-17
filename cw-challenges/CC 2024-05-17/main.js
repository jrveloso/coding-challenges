// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

// 2 arrays -> number
// concat and sort arr
// if length odd
// divide by 2 - .5, -> return array[]
// if even
// divide by 2 -> array[result -1] + array[result] / 2

const findMedianSortedArrays = (nums1, nums2) => {
    let newArr = nums1.concat(nums2).sort((a,b) => a - b)
    let returnInd = newArr.length
    if(returnInd % 2 !== 0) {
        return newArr[(returnInd / 2) - 0.5]
    } else {
        return (newArr[(returnInd / 2) - 1] + newArr[(returnInd / 2)]) / 2
    }
};

console.log(findMedianSortedArrays([1,3], [2]), 2)
console.log(findMedianSortedArrays([1,2], [3,4]), 2.50000)