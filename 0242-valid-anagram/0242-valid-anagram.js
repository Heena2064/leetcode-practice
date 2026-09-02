/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }

    let freqS = {}
    for (let i = 0; i < s.length; i++) {
        if (freqS[s[i]] === undefined) {
            freqS[s[i]] = 1
        } else {
            freqS[s[i]]++
        }
    }


    let freqT = {}
    for (let i = 0; i < t.length; i++) {
        if (freqT[t[i]] === undefined) {
            freqT[t[i]] = 1
        } else {
            freqT[t[i]]++
        }

    }
    for (let char in freqS) {
        if (freqS[char] !== freqT[char]) {
            return false
        }
    }


return true

};