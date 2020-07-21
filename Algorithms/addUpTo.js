const {performance} = require('perf_hooks');

const addUpTo = (n) => {
    // compound arithmetics work well for reducing results into one

    // let total = 0;

    // for (let i = 0; i <= n; i++) {       //Number of operations arebounded by a multiple
    //     total += i;                      // this operation is O(n)
    // }
    // console.log(total);

    // this solution will always have just 3 operations
    // the complexity for this solution is O(1)
    return n * (n + 1) / 2;         
}

let t1 = performance.now();
console.log(addUpTo(3));
let t2 = performance.now();
console.log((t2 - t1) / 1000);

