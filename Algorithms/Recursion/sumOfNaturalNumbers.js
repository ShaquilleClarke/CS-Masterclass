const log = console.log;

const sumNums = (n, map = new Map()) => {
    if (map.has(n)) return map.get(n)
    if (n <= 1) return n;
    map.set(n, n + sumNums(n-1))
    return map.get(n);
}

log(sumNums(1000))