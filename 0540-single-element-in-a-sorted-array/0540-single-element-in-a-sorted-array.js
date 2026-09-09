/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let left = 1;
    let right = nums.length - 2;
    let n = nums.length;

    if (n === 1){
        return nums[0]
    }

    if (nums[0] !== nums[1]){
        return nums[0];
    }

    if(nums[n -1] !== nums[n -2]){
        return nums[n - 1];
    }


    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1])
            return nums[mid];

        if ((mid % 2 === 1 && nums[mid ] === nums[mid - 1]) || (mid % 2 === 0 && nums[mid] === nums[mid + 1])) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1

};