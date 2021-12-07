const log = console.log;

const rotLeft = (a, d) => {
    while (d--) {
        a.push(a.shift());
    }
    return a;
}
// const rotLeft = (a, d) => {
//     if (a.length === 1) return a;
//     for (let i = 0; i < d; i++) {
//         a.push(a.shift());
//     }
//     return a;
// }
// const rotLeft = (a, d) => {
//     a.push(...a.splice(0,d))
//     return a
// }

log(rotLeft([1,2,3,4,5],4))