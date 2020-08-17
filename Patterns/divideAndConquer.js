const assert = require('assert').strict;
// This pattern involves dividing a data set into smaller chunks and then repeating a process with a
// subset of data.
// This pattern can tremedously decrease time compelxity

const binarySearch = (arr, val) => {
    let low = 0, hi = arr.length -1; 
    
    while (low <= hi) {
        let mid = Math.floor((low + hi) / 2);

        if (val > arr[mid]) low = mid + 1;
        else if (val < arr[mid]) hi = mid - 1;
        else return mid;
    }
    return -1;
}

console.log(binarySearch([1, 3, 4, 8, 12, 18, 25], 4));
