const log = console.log;

// This is a variation of twoSum that asks to return a boolean

const hasPairWithSum = (arr, sum) => {
    let map = {}, diff, i = 0;
    while (i < arr.length) {
        diff = sum - arr[i];
        if((diff in map) && map[diff] !== i) return true;
        map[arr[i]] = i;
        i++;
    }
    return false;  
}
log(hasPairWithSum([7, 5, 3, 4], 12))
