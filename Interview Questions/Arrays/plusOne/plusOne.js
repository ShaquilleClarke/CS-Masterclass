const log = console.log;

const plusOne = (digits) => {
    let i = digits.length-1;
    while (i >= 0) {
        digits[i]++;
        if (digits[i] > 9) digits[i] = 0;
        else return digits;
        i--;
    }
    digits.unshift(1);
    return digits;
}
log(plusOne([7, 8, 9]))