/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
    if (n === 0) {
        return 0
    }

    let parent = Math.ceil(k / 2)

    if (k % 2 !== 0) {
        return kthGrammar(n - 1, parent)
    }
    return 1 - kthGrammar(n - 1, parent)
};