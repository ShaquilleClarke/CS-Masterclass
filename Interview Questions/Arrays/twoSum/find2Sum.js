const log = console.log;

// This variation of twoSum requires you to return the indices for a pair where the sum is equal
// to target - 30
// If there is more than one pair, return the pair with the highest value

const find2Sum = (nums, target) => {
    target -= 30;
    const map = new Map();
    let res = [], max = -Infinity, n, diff;
    for (let i = 0; i < nums.length; i++) {
        n = nums[i];
        diff = target - n;
        if (map.has(diff)) {
            if (n > max || diff > max) {
                res = [map.get(diff), i];
                max = Math.max(n, diff);
            }
        }
        map.set(n, i);
    }
    return res;
}
log(find2Sum([6, 4, 7, 3], 40))