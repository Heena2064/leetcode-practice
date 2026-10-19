/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let square = []

    for (let i = 0; i < nums.length; i++) {
        square.push(nums[i] * nums[i])
    };

    square.sort((a, b) => a - b);
    return square;

};