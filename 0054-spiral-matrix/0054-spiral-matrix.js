/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (left <= right && top <= bottom) {
        // left --> right
        for (let j = left; j <= right; j++) {
            result.push(matrix[top][j]);
           
        }
        top++

        // top --> bottm
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
            
        }
        right--

        //right --> left
        if(top<=bottom){
            for (let j = right; j >= left; j--) {
            result.push(matrix[bottom][j]);
            
        }
        bottom--
        }
        

        // bottom --> top
        if(left <=right){
            for (let i = bottom; i >= top; i--) {
            result.push(matrix[i][left]);
            
        }
        left++
        }
        
    }
    return result;
};