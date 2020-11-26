const log = console.log;


let a = (9).toString(2); // 1001
let b = (5).toString(2); //  101

// 9 & 5 -->  expected output is 1 (1)
// log((9 & 5).toString(2))

// 9 | 5 -> expected output is 1101 (13)
// log((9 | 5).toString(2))

// 9 ^ 5 -> expected output is 1100
log((9 ^ 5).toString(2))