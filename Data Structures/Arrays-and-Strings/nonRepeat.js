// Find the first non repeating letter in a string 
const log = console.log;

const nonRepeat = (string) => {
    let map = {};

    for (let str of string) {
        map[str] = (map[str] || 0) + 1;
    }

    for (let str in map) {
        if (map[str] === 1) return str
    }
    return null;

}

log(nonRepeat('total'))