const log = console.log;

const isValid = (s) => {
    const charMap = {
        '(':')',
        '[':']',
        '{':'}'
    }, stack = [];
    let i = 0, char, checkKey;

    while (i < s.length) {
        char = s[i];
        if (charMap[char]) {
            stack.push(char);
        } else {
            checkKey = stack.pop();
            if (charMap[checkKey] !== char) return false;
        }
        i++;
    }
    return stack.length === 0;
}
log(isValid('{]}'))