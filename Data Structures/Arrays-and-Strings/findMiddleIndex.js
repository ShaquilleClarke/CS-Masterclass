const log = console.log;

const findMiddleIndex = (nums) => {
    let total = 0, left = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        total -= nums[i];
        if (total === left) return i;
        left += nums[i];
    }
    return -1;
}