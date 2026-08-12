/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxSum = 0 ;
    let sum = 0;

    for (let i = 0; i<  k ; i ++){
        sum += nums[i]
    }
    
    maxSum = sum
    
    let left = 0;
    let right = k- 1;

    while (right < nums.length -1){
        left ++;
        right ++;

        sum = sum - nums[left-1] + nums[right]

        if (sum > maxSum){
        maxSum = sum
       
    }
       
    }

    
    maxSum = maxSum / k 
    return maxSum;
    
};