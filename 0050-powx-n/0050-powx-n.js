/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let negative = n < 0;
    n = Math.abs(n);

    function power(n) {
        if (n === 0) {
            return 1
        }
        let half = power(Math.floor(n / 2))
        if (n % 2 === 0) {
            return half * half
        }
        return half * half * x
    }

    let result = power(n);

    if (negative) {
        return 1 / result;
    }

    return result
};