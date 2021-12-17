const log = console.log;

/* Best if used on large arrays (customers in database) - O(log n) */

const merge = (array1, array2) => {
    let arr1 = array1, arr2 = array2, results = [],
    i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

const mergeSort = (arr) => {
    let mid, left, right;
    if(arr.length <= 1) return arr;
    mid = Math.floor(arr.length/2);
    left = mergeSort(arr.slice(0, mid));
    right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

log(mergeSort([56, 32, 5, 11, 9, 12, 8, 44, 16, 3, 10]))