/*

Given a pair of coordinates, return the number of ways we can reach the
end of a grid

We can only move down and right

m = row
n = col

*/


/*  

Tips:

1. Make it work
 - Viauslize the problem as a tree
 - Implement the tree using recursion
 - Test it

2. Make it efficient
 - Add memo object 
 - Add a base case to return memo values
 - Store return values in memo object
*/
const log = console.log;


const gridTraveler = (m, n, memo = new Map()) => {
    let key = `${m}|${n}`; 
    if (!memo.has(key)) {
        if (m === 0 || n === 0) return 0;
        if (m === 1 && n === 1) return 1;
        memo.set(key, gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo))
    }
    return memo.get(key);
}

log(gridTraveler(2, 3))
