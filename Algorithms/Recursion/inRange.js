const log = console.log;

// const inRange = (num) => {
//     if(num === 0) return 0;
//     return num + inRange(num - 1);
// }

const inRange = (num) => {
    let result = 0;
    const recurse = (n) => {
        if(n === 0) return 0;
        result += n;
        recurse(n - 1);
    }
    recurse(num);
    return result;
}
log(inRange(7))
log(inRange(8))
log(inRange(3))
