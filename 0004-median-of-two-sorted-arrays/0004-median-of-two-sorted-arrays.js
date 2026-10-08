/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0;
    let j = 0;
    let result = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i])
            i++;
        } else {
            result.push(nums2[j])
            j++;
        }
    }

    while(i < nums1.length) {
        result.push(nums1[i])
        i++;
    } 
    while (j < nums2.length) {
        result.push(nums2[j])
        j++;
    }

    let n = result.length;

    if (n % 2 !== 0) {
        return result[Math.floor(n / 2)]
    }

    let mid = n / 2

    return (result[mid - 1] + result[mid])/2;
};