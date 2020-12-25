const log = console.log;

const insertionSort = (array) => {
    let arr = array;
    for (let i = 1; i < arr.length; i++) {
        current = arr[i];
        for (j = i; j > 0; j--) {
            if (arr[j] < arr[j-1]) {
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            } else {
                break;
            }
        }
    }
    return arr;
}
log(insertionSort([25, 16, 32, 4, 1]))