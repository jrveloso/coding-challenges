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

// given 2 sorted arrays -> return median of two arrays (middle element)
// concat arrays and sort
// if array.length % 2 !== 0
// return array[Math.ceil(array.length / 2)]
// else take array[array.length / 2] + array[array.length / 2 - 1]/ 2

const findMedianSortedArrays = (arr1, arr2) => {
    let concatArr = arr1.concat(arr2).sort((a,b) => a - b)

    if(concatArr.length % 2 !== 0) {
        return concatArr[Math.floor(concatArr.length /2)]
    } else {
        return (concatArr[concatArr.length / 2] + concatArr[(concatArr.length / 2) - 1]) / 2
    }
}

console.log(findMedianSortedArrays([1,3], [2]), 2)
console.log(findMedianSortedArrays([1,2], [3,4]), 2.5)