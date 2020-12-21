const log = console.log;

const naiveSearch = (long, short) => {
    let match = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) match++;
        }
    }
    return match;
}
log(naiveSearch('wowzydfdwowwowfdf', 'wow'))
log(naiveSearch('boots, cats and boots, n cats', 'and'))