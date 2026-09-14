/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((a, b) => a + b, 0);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sum = 0;
        let count = 1;

        for (let i = 0; i < weights.length; i++) {
           
            if (sum + weights[i] <= mid) {
                sum += weights[i];
            } else {
                count++;
                sum = weights[i]
            }
        }

        if (count <= days) {
            right = mid -1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};