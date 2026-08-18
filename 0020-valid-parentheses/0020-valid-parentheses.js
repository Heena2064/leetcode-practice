/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []

    let pairs = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };

    for (let i = 0; i <s.length; i ++){
        let char = s[i]


        if (!(char in pairs)){
            stack.push(char)
        }else {
            if(stack.length===0 ||stack[stack.length -1] !== pairs[char]){
                return false 
            }
            stack.pop()
        }
    }
    return stack.length === 0;

};