const log = console.log;

const someRecursive = (array, callback) => {
    if (!array.length) return false;
    if(callback(array[0])) return true;

    return someRecursive(array.slice(1), callback);
}

const isOdd = (val) => {
    if (val % 2 === 0) return false;
    else return true;
}

const greaterThanTen = (val) => {
    if (val >= 10) return true;
    else return false;
}
log(someRecursive([1, 2, 3], greaterThanTen))
// log(someRecursive([2, 4, 6, 3], isOdd))