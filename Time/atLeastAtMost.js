const logAtLeast5 = (n) => {
    // the loop will run 5 times as long as n is the minimum integer
    // as n increases the runtime increases increeases
    for (let i = 0; i <= Math.max(5, n); i++) {
        console.log(i);
        // O(n)
    }
}


const logAtMost5 = (n) => {
    // as n increases the runtime complexity decreases
    for (let i = 0; i <= Math.min(n, 10); i++) {
        console.log(i);
        // O(1)
    }
}

logAtMost5(10);