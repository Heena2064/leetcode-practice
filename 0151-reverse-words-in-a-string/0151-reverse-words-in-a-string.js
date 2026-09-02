/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.trim().split(/\s+/);

    let left = 0;
    let right = arr.length - 1

    while (left < right) {
        let temp = arr[left]
        arr[left] = arr[right];
        arr[right] = temp
        left++;
        right--;

    }

    let result = arr.join(" ");
    

    return result


};