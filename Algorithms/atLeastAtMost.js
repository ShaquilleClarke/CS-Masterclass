const logAtLeast5 = (n) => {
    // the loop will run 5 times as long as n is the minimum integer
    // as n increases the number of operations increeases
    for (let i = 0; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}


const logAtMost5 = (n) => {
    // as n increases the number of operations decrease
    for (let i = 0; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

logAtMost5(500);