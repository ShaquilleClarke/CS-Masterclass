const log = console.log;

// const power = (base, exponent) => {
//     let result = 1;
//     const recurse = (num, expnt) => {
//         if (expnt === 0) return 1;
//         result *= num;
//         recurse(num, expnt - 1);
//     };
//     recurse(base, exponent);
//     return result;
// }

const power = (base, exponent) => {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

log(power(2, 5));
log(power(10, 3));
log(power(4, 4));
