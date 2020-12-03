const log = console.log;


let a = (9).toString(2); // 1001
let b = (5).toString(2); //  101

// AND: 9 & 5 -->  expected output is 1 (1)
// log((9 & 5).toString(2))

// OR: 9 | 5 -> expected output is 1101 (13)
// log((9 | 5).toString(2))

// XOR: 9 ^ 5 -> expected output is 1100
// log((9 ^ 5).toString(2))

// Left Shift: 9 << 2 -> expected output: 100100 (36)
// log((9 << 2).toString(2))

// Right Shift: 9 >> 2 -> expected output: 10 (2)
// log((9 >> 2).toString(2))

// Zero-Fil Right Shift: 9 >>> 2 -> expected output: 0010 
//log((9 >>> 2).toString(2))

// NOT: ~9 -> expected output: 0110 (-10)
log((~9).toString(2))