const log = console.log;

const hasPairWithSum = (arr, sum) => {
    let map = {}, diff, i = 0;
    while (i < arr.length) {
        map[arr[i]] = i;
        i++;
    }
    i = 0;
    while (i < arr.length) {
        diff = sum - arr[i];
        if((diff in map) && map[diff] !== i) return true;
        i++;
    }
    return false;  
}
log(hasPairWithSum([7, 5, 3, 4], 12))
