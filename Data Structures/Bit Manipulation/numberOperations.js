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

const divideBit = (a, b) => {
    let c = 0, isNegative = 0;
    if(a < 0) {
        a = negateBit(a);
        isNegative = !isNegative;
    }
    if(b < 0) {
        b = negateBit(b);
        isNegative = !isNegative;
    }
    if(b != 0) {
        while (a >= b) {
            a = subtractBit(a, b)
            c++;
        }
    }
    if(isNegative) c = negateBit(c);
    return c;
}

// log(subtractBit(7, 3).toString(2))
// log(addBit(9, 5).toString(2))
log(divideBit(10, 3))
