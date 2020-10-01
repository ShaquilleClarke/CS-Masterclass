// Find the first repeating character in a string

const log = console.log;

const repeatingChar = (str) => {
    let map = {};

    for (let char of str) {
        map[char] = map[char] + 1 || 1;
    }

    for (let char in map) {
        if (map[char] > 1) return char;
    }

    return null;
}

log(repeatingChar('betelgeuse'));