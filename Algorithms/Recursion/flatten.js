const log = console.log;

const flatten = (arr) => {
    let i = 0; newArr = [];
    while (i < arr.length) {
        if(Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i]));
        } else {
            newArr.push(arr[i])
        }
        i++;
    }
    return newArr;
}
log(flatten([1, 2, 3, [4, [[5, 6, [7, [8, 9]]]]]]))