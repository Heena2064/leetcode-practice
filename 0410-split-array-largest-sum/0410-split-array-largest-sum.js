/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let left = Math.max(...nums);
    let right = nums.reduce((a,b)=> a+b,0);

    while(left<=right){
        let mid = Math.floor((left+right)/2);

        let sum = 0;
        let count = 1;

        for(let num of nums){
            if(sum + num > mid ) {
                count ++;
                sum = num;
            }else{
                sum += num
            }}
            if(count <= k ){
                right = mid -1;
            }else{
                left = mid+1;
            }
    }
    return left;
};