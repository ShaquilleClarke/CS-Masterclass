const log = console.log;

// const factorial = (num) => {
//     if(num === 0) return 1;
//     return num * factorial(num - 1);
// }

const factorial = (num) => {
    let result = 1;
    const recurse = (nextNum) => {
        if(nextNum === 0) return 1;
        result *= nextNum;
        recurse(nextNum - 1);
    }
    recurse(num);
    return result
}
log(factorial(4))
