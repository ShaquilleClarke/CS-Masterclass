const log = console.log;

const findPairsWithGivenDifference = (arr, k) => {
    if (arr.length < 2) return null;

    const map = {}, res = [];

    for (let num of arr) {
        map[num - k] = num;
    }

    for (let num of arr) {
        if (num in map) res.push([map[num], num]);
    }

    return res;
}

log(findPairsWithGivenDifference([0, 5, 10], 5))

// map = { -5 : 0, 0 : 5, 5 : 10 }
// res = [ [5, 0], [10, 5] ]