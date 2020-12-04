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

const multiplyBit = (a, b) => {
    let m = 1, c = 0;
    if(a < 0) {
        a = negateBit(a);
        b = negateBit(b);
    }
    while (a >= m && b) {
        if(a & m) c = addBit(b, c);
        b = b << 1;
        m = m << 1;
    }
    return c;
}

// log(subtractBit(7, 3).toString(2))
// log(addBit(9, 5).toString(2))
log(multiplyBit(4, 5).toString(2))
