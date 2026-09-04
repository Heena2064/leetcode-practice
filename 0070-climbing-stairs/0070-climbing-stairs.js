/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let memo = {};

    function climb(n) {
        if (n === 1) {
            return 1
        }

        if (n === 2) {
            return 2
        }

        if (memo[n] !== undefined) {
            return memo[n]
        }
        memo[n] = climb(n - 1) + climb(n - 2)

        return memo[n]
    }
    return climb(n)



};