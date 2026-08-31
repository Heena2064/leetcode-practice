/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    let count = {};

    for (let i = 0; i < nums.length; i++) {

        let num = nums[i]

        if (count[num] !== undefined) {
            count[num]++;

        } else {
            count[num] = 1
        }


        if (count[num] > nums.length / 2) {
            return num
        }
    }




};