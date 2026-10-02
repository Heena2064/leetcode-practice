/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let freq = {};
    let n = nums.length;
    let max = n / 2;

    for(let i =0; i< n; i++){
        
        if(freq[nums[i]] === undefined){
            freq[nums[i]]= 1
        }else{
            freq[nums[i]]++
        }
        
    }
    for(let num of nums){
        if(freq[num]>=max){
            return num
        }
    }
   
}
    

    
    
    
