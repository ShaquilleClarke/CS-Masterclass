const log = console.log,
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


const rotate = (matrix) => {
    for(let row = 0; row < matrix.length; row++) {
        for (let col = row; col < matrix[0].length; col++) {
            [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
        }
    }

    for (let row of matrix) {
        row.reverse();
    }

    return matrix;
}

log(rotate(matrix))