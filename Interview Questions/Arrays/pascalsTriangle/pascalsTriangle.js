const log = console.log;

const generate = (numRows) => {
    const pascalsTriangle = new Array(numRows);
    let row, rowAbove;
    for (let i = 0; i < numRows; i++) {
        row = new Array(i+1);
        row[0] = 1;
        row[row.length-1] = 1;
        for(let j = 1; j < row.length-1; j++) {
            rowAbove = pascalsTriangle[i - 1];
            row[j] = rowAbove[j] + rowAbove[j-1];
        }
        pascalsTriangle[i] = row;
    }
    return pascalsTriangle;
}
log(generate(5))