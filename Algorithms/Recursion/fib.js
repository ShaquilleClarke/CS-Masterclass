const log = console.log

const fib = (n) => {
    if(n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

log(fib(4))
log(fib(5))
log(fib(10))
