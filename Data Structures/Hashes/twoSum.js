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

// We must iterate through the array, subtract the current element from the target,
// then check to see if the difference is located within the map. If it is, we'll return an array
// containing the location of the difference within the map along with the current index of the array.
// Otherwise, we will store the arrays current index within the map and set its value to the current index.