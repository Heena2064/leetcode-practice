/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function (n, quantities) {
    let low = 1;
    let high = Math.max(...quantities);

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        let stores = 0;

        for (let quantity of quantities) {
            stores += Math.ceil(quantity / mid)
        }
        if (stores <= n) {
            high = mid - 1
        } else {
            low = mid+1;
        }

    }
    return low;
};