const log = console.log;

const selectionSort = (array) => {
    let arr = array, min, temp;
    for (let i = 0; i < arr.length; i++) {
        min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j; 
        }
        if(i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}
log(selectionSort([2, 8, 35, 12, 11, 64, 27, 98, 3]))