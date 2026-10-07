/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!== t.length){
        return false;
    }

    let freqS = new Map();
    for (let char of s){
        freqS.set(char, (freqS.get(char) || 0) + 1);
    }

    let freqT =new Map();
    for (let char of t){
        freqT.set(char, (freqT.get(char) || 0) + 1);
    }

    for (let char of freqS.keys()){
        if(freqS.get(char)!==freqT.get(char)){
            return false;
        }
    }
    return true;

    
};