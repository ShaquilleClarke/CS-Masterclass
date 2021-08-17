const log = console.log,
grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W']
];

const minimumIsland = (grid) => {
    const visited = new Set();
    let min = Infinity, size;

    for (let r = 0; r < grid.length; r+=1) {
        for (let c = 0; c < grid[0].length; c+=1) {
            size = exploreSize(grid, r, c, visited);
            // log(size)
            if (size < min && size > 0) min = size;
        }
    }
    return min;
}

const exploreSize =  (grid, r, c, visited) => {
    const rowInbounds = r >= 0 && r < grid.length,
    colInbounds = c >= 0 && c < grid[0].length;

    if(!rowInbounds || !colInbounds) return 0;

    if(grid[r][c] === 'W') return 0;

    let pos = r + ',' + c;

    if(visited.has(pos)) return 0;
    visited.add(pos);

    let size = 1;

    size += exploreSize(grid, r+1, c, visited);
    size += exploreSize(grid, r-1, c, visited);
    size += exploreSize(grid, r, c-1, visited);
    size += exploreSize(grid, r, c+1, visited);

    return size;
}

log(minimumIsland(grid));