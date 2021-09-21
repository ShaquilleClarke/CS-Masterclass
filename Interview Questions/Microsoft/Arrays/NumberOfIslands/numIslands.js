// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), 
// return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1


// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

const log = console.log;


const numIslands = (grid) => {
    let num = 0;
    for (let row = 0; row <= grid.length-1; row++) {
        for (let col = 0; col <= grid[0].length-1; col++) {
            if(grid[row][col] === "1") {
                num++;
                traverse(grid, row, col)
            }
       }
    }
    return num;
};

const traverse = (grid, row, col) => {
    // Make sure row and column are in bounds
    let rowInbounds = row < grid.length && row >= 0,
    colInbounds = col < grid[0].length && col >= 0;

    if (
        !colInbounds || 
        !rowInbounds ||
        grid[row][col] === "0"
    ) return false  

    grid[row][col] = "0";
    // traverse(up)
    traverse(grid, row-1, col)
    // traverse(down)
    traverse(grid, row+1, col)
    // traverse(left)
    traverse(grid, row, col-1)
    // traverse(right)
    traverse(grid, row, col+1)
    return true
    
}

const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];

log(numIslands(grid))