const log = console.log;

const jumpingOnClouds = (c) => {
    let jumps = 0, i = 0;

    while (i < c.length-1) 
    {
        i += (c[i+2] === 0) ? 2 : 0;
        jumps++;
    }
    return jumps;
}

log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]))