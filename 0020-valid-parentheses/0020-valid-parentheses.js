/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let stack = [];

    let pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // opening bracket
        if (!(char in pairs)) {
            stack.push(char);
        }

        // closing bracket
        else {
            if (
                stack.length === 0 ||
                stack[stack.length - 1] !== pairs[char]
            ) {
                return false;
            }

            stack.pop();
        }
    }

    return stack.length === 0;

};