/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];

    for (let i = 0 ; i < operations.length ; i++){
        let operation = operations[i]
       
        if(operation === "C"){
        stack.pop()
        } 

        else if(operation === "D"){
        stack.push(stack[stack.length-1]*2);
        }

        else if(operation === "+"){
        stack.push(stack[stack.length-1] + stack[stack.length-2]);
        }
        else{
            stack.push(Number(operation))
        }
    }
    let total = 0;

    for (let i = 0 ; i < stack.length; i++){
        total += stack[i]
        
    }
    return total
};