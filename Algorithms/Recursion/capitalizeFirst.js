const log = console.log;

const capitalizeFirst = (arr) => {
    if (arr.length === 1) {
        return [arr[0][0].toUpperCase() + arr[0].slice(1)];
    }
    const res = capitalizeFirst(arr.slice(0, -1));
    const string = arr.slice(arr.length-1)[0][0].toUpperCase() + arr.slice(arr.length-1)[0].slice(1);
    res.push(string);
    return res;
}
log(capitalizeFirst(['car', 'taco', 'banana']))
    