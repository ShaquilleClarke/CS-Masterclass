const log = console.log;

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j-1]) [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
        }
    }
    return arr;
}

const bucketSort = (arr) => {
    if (arr.length < 2) return arr;
    
    let maxVal = Math.max(...arr), minVal = Math.min(...arr); // Get max and minimum values in the input array
    let bucketRange = 5;
    let bucketArrSize = Math.floor((maxVal - minVal) / bucketRange)+1;
    let bucketArr = Array.from({length: bucketArrSize}, () => [])
    let bucketIndex;
    
    for (let el of arr) {
        bucketIndex = Math.floor((el - minVal) / bucketRange)
        bucketArr[bucketIndex].push(el);
    }

    for (let bucket of bucketArr) {
        insertionSort(bucket);
    }
    arr = [].concat(...bucketArr);

    return arr;
}
log(bucketSort([45, 86, 21, 15, 2]))
// log(insertionSort([45, 86, 21, 15, 2]))
// [ 2, 15, 21, 45, 86 ]

// expected output --> [2, 12, 21, 45, 86]