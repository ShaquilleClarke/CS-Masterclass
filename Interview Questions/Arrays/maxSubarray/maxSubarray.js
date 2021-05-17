const log = console.log;

const maxSubArray = (nums) => {
    let max = nums[0], sum = nums[0], i = 1;
    while (i < nums.length) {
        sum = Math.max(nums[i], nums[i] + sum);
        max = Math.max(max, sum);
        i++
    }
    return max;
}
log(maxSubArray([-1]))