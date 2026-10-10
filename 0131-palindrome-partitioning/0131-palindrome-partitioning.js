/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let result = [];
    let path = [];

    function isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] != str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    function backtrack(start) {
        if (start === s.length) {
            result.push([...path])
            return;
        }

        for (let end = start; end < s.length; end++) {
            let substring = s.slice(start, end + 1);

            if (isPalindrome(substring)) {
                path.push(substring)

                backtrack(end + 1)

                path.pop()
            }
        }
    }
    backtrack(0);
    return result;
};