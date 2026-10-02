/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    let n = grid.length;
    let freq = {};
    let repeated;
    let missing;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < grid[i].length; j++) {

            let num = grid[i][j]
            if (freq[num] === undefined) {
                freq[num] = 1;
            } else {
                freq[num]++;
            }
        }
    }

    for (let i = 1; i <= n * n; i++) {
        if (freq[i] === 2) {
            repeated = i
        }


        if (freq[i] === undefined) {
            missing = i
        }
    }

    return [repeated, missing]
};