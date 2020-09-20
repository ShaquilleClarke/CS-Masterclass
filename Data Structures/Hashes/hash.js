let log = console.log;

// const hash = (key, arrayLen) => {
//     let total = 0, WEIRD_PRIME = 31;
//     for (let i = 0; i < Math.min(key.length, 100); i++) {
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96;
//         total = (total * WEIRD_PRIME + value) % arrayLen;
//     }
//     return total;
// }
// log(hash('pookie', 29))
// log(hash('axel', 32))
// log(hash('jimi', 27))
// log(hash('kurt', 91))

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0, WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        return index;
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    } 

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) return this.keyMap[index][i]
            }
        }
        return undefined;
    }
}
let ht = new HashTable(17)
log(ht.set('hello world', 'goodbye!!'))
log(ht.set('hot', 'dog'))
log(ht.set('spaghetti', 'sauce'))
log(ht.get('hello world'))