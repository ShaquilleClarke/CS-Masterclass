const log = console.log;

const fib = (n, mem = []) => {
    if (mem[n] !== undefined) return mem[n];
    if (n <= 2) return 1;
    let res = fib(n - 1, mem) + fib(n - 2, mem);
    mem[n] = res;
    return res;
}

log(fib(5));