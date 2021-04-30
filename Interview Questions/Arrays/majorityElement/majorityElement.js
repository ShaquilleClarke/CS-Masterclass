const log = console.log;

const majorityElement = (nums) => {
    let n = Math.floor(nums.length/2);
    const store = {}
    for (let val of nums) {
        store[val] = (store[val] || 0)+1;
        if(store[val] > n) return val;
    }
    return null;
}
log(majorityElement([3, 2, 3]));