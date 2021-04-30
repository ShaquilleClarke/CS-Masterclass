const log = console.log;

const twoSum = (nums, target) => {
    let map = {}, diff, i = 0;
    while (i < nums.length) {
        diff = target - nums[i];
        if((diff in map) && map[diff] !== i) return [map[diff], i];
        map[nums[i]] = i;
        i++;
    }
    return null;  
}
log(twoSum([2, 7, 8], 10))