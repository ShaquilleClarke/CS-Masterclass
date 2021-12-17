const log = console.log, 
matrix = [
    [2, 4, -1],
    [-10, 5, 11],
    [18, -7, 6]
];


const transpose = (matrix) => {
    const res = Array.from({length: matrix[0].length}, () => new Array());
    
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            res[col][row] = matrix[row][col];
        }
    }

    return res;
}

log(transpose(matrix))