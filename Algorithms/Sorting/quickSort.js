const log = console.log;

const quickSort = (arr) => {
    if(arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1],
    leftArr = [], rightArr = [];
    for (let el of arr.slice(0, arr.length - 1)) {
        el < pivot ? leftArr.push(el) : rightArr.push(el)
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
log(quickSort([8, 16, 3, 1, 12, 9, 20]));
//Expected Output --> [1, 3, 8, 9, 12, 16, 20]