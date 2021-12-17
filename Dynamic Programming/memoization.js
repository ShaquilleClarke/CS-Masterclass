const log = console.log;

/*

The 'key' of our memoization object/map, 'mem', is always the argument passed into the function

*/

const fib = (n, mem = []) => {
    if (mem[n]) return mem[n];
    if (n <= 2) return  1;
    mem[n] = fib(n - 1, ) + fib(n - 2, mem);
    return mem[n];
}

log(fib(10));