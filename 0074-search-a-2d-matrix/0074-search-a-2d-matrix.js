/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let m = matrix[0].length;
    let n = matrix.length;

    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        let row = Math.floor(mid / m);
        let col = mid % m;

        if (matrix[row][col] === target) {
            return true;
        } else if ((matrix[row][col]) < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};