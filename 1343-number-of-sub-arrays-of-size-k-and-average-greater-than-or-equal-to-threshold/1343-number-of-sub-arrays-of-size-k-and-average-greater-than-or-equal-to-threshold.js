/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
   
    let sum = 0 ;
    let count = 0;
    let average = 0;

    for (let i = 0; i < k ; i ++){
        sum+= arr[i]
    }

    average =sum/k
        
    if (average >= threshold){
        count ++;
    }

    //sliding window part 
    let left = 0;
    let right = k-1;

    while (right < arr.length - 1){
        left ++;
        right ++;

        sum = sum- arr[left-1]+arr[right]
        average =sum/k
        
        if (average >= threshold){
        count ++;
    }
    }
    

return count;
};