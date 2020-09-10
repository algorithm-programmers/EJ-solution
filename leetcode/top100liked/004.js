// Median of Two Sorted Arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mixed = [...nums1, ...nums2];
    mixed.sort((a,b) => a - b);
    
    const midIdx = Math.floor(mixed.length/2);
    
    return mixed.length % 2 !== 0 ? mixed[midIdx] : (mixed[midIdx - 1] + mixed[midIdx]) /2
};