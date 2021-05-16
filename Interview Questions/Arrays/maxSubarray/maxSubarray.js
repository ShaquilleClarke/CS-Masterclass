const log = console.log;

const maxSubArray = (nums) => {
    let max = 0, sum = 0, i = 0;
    while (i < nums.length) {
        if (sum <= 0) sum = 0;
        else if (sum <= 0 && nums[i-1] >=0) sum += nums[i-1];
        sum += nums[i];
        max = Math.max(max, sum);
        i++
    }
    return max;
}
log(maxSubArray([5,4,-1,7,8]))