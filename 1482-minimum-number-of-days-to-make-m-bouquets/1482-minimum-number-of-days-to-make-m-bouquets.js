/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
    if (m * k > bloomDay.length) {
        return -1;
    }


    let left = 1;
    let right = Math.max(...bloomDay)

    while (left <= right) {

        let mid = Math.floor((left + right) / 2)

        let bouquets = 0;
        let flowers = 0;

        for (let i = 0; i < bloomDay.length; i++) {

            if (bloomDay[i] <= mid) {
                flowers++;

                if (flowers === k) {
                    bouquets++;
                    flowers = 0;
                }
            }else {
                    flowers = 0;
                }
            }

        

        if (bouquets >= m) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

    }

    return left;
};