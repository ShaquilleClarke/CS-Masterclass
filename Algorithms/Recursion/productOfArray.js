const log = console.log;

// const productOfArray = (array) => {
//     if(!array.length) return 1;
//     return array[0] * productOfArray(array.slice(1));
// }
const productOfArray = (array) => {
    let result = 1;
    const recurse = (arr) => {
        if(!arr.length) return 1;
        result *= arr[0];
        recurse(arr.slice(1));
    }
    recurse(array)
    return result;
}
log(productOfArray([1, 2, 3, 10]));
log(productOfArray([3, 6, 1, 10]));

