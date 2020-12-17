const log = console.log;

const linearSearch = (arr, val) => {
    let i = 0;
    while (i < arr.length) {
        if(arr[i] === val) return i;
        i++;
    }
    return false;
}
log(linearSearch([1, 2, 3], 2))
log(linearSearch([1, 2, 3], 4))