// Given an m x n matrix, return all elements of the matrix in spiral order.

// Input: matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// top: 1, right: 1, bottom: 1, left: 1
// Output: [1,2,3,6,9,8,7,4,5]

// Input: matrix = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

const log = console.log;

const spiralOrder = (matrix) => {
    const result = [];
    let top = 0, bottom = matrix.length-1, left = 0, right = matrix[0].length-1;

    
    while (top <= bottom && left <= right) {
        // left => right, top++
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // top => bottom, right--
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // right => left, bottom--
        if (bottom >= top) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;

        }

        // bottom => top, left++
        if (left >= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left])
            }
            left++;
        }
    }
    return result;
};


log(spiralOrder([[1,2,3,4], [5,6,7,8],[9,10,11,12]]));