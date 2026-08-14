/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    freq = {};

    for (let ch of s){
        if(freq[ch]===undefined){
            freq[ch]=1;
        }else{
            freq[ch]++
        }
    }

    for (let i =0; i < s.length; i ++){
        if (freq[s[i]]===1){
            return i
        }
    }
    return -1
};