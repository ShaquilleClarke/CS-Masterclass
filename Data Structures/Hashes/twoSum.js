const twoSum = (nums, target) => {
    let map = {}, i = 0;

    while (i < nums.length) {
        let diff = target - nums[i];
        if (diff in map) return [map[diff], i];
        map[nums[i]] = i;
        i++;
    }
}
console.log(twoSum([4, 2, 4], 8))