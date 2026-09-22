/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let XOR = 0;

    for(let i =0; i<nums.length; i++){
        XOR = XOR^nums[i]
    }
    return XOR;
};