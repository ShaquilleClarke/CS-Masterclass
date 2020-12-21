const log = console.log;

const bubbleSort = (array) => {
    let arr = array;
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
log(bubbleSort([11, 3, 6, 8, 2, 20, 1]))
log(bubbleSort([111, 300, 600, 608, 22, 2000, 1]))