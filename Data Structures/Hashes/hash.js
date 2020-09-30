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
        // This array will store an array of linked lists
    }


    // Our hash function simply takes an input and converts it to a string
    _hash(key) {
        let total = 0, WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    
    // We create our index by using the hash function and storing its result
    // We then check to see to see if that index is occupied. If it isn't occupied then we proceed to line 40, otherwise we will proceed to
    // line 43
    // Remember that we are storing an array of linked lists 
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    } 
    
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
            }
        }
        return undefined;
    }

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr;
    }
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr;
    }
}

let ht = new HashTable(17)
log(ht.set('hello world', 'goodbye!!'))
// log(ht.set('hot', 'dog'))
// log(ht.set('spaghetti', 'sauce'))
log(ht.get('hello world'))
// log(ht.get('spaghetti'))
// log(ht.get('hot'))
// log(ht)
log(ht.values())
// log(ht.keys())