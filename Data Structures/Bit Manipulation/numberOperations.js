const log = console.log;

const addBit = (a, b) => {
    let carry;
    while (b !== 0) {
        carry = (a & b);
        a = (a ^ b);
        b = carry << 1; 
    }
    return a;
}

const negateBit = (a) => {
    return addBit(~a, 1);
}

const subtractBit = (a, b) => {
    return addBit(a, negateBit(b))
}

log(subtractBit(7, 3).toString(2))
// log(addBit(9, 5).toString(2))
