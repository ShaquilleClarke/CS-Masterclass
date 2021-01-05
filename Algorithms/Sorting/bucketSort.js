const log = console.log;

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j-1]) {
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            }
        }
    }
    return arr;
}

const bucketSort = (arr) => {
    if (arr.length === 0) return arr;
    let minVal = arr[0], maxVal = arr[0], size = 3;
    for (let val of arr) {
        if (val < minVal) minVal = val;
        else if (val > maxVal) maxVal = val;
    }

    let bucketCount = Math.floor((maxVal - minVal) / size) + 1,
    allBuckets = new Array(bucketCount);
    for (let i = 0; i < allBuckets.length; i++) {
        allBuckets[i] = [];
    }

    for (let val of arr) {
        allBuckets[Math.floor((val - minVal) / size)].push(val);
    }

    for (let bucket of allBuckets) {
        insertionSort(bucket);
    }

    return [].concat(...allBuckets);
}
log(bucketSort([45, 86, 21, 15, 2]))

// expected output --> [2, 12, 21, 45, 86]