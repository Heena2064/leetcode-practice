/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if (s.length !== t.length){
        return false 
    }


    let freqS = {};

    for (let ch of s){
        if (freqS[ch]===undefined){
            freqS[ch]=1;
        }else{
            freqS[ch]++
        }
    }

    let freqT = {};

    for (let ch of t){
        if (freqT[ch]===undefined){
            freqT[ch] =1;
        }else{
            freqT[ch]++
        }
    }

    for(ch in freqS){
        if (freqS [ch] !== freqT[ch]){
            return false
        }
    }
    
return true
};