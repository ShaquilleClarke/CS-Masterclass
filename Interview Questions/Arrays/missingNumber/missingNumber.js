const log = console.log;

const missingNumber = (nums) => {
    let i = 0; n = nums.length, sumIfNoneMissing = n, sum = 0;
    while (i < n) {
        sumIfNoneMissing += i;
        sum += nums[i];
        i++;
    }
    return sumIfNoneMissing - sum;
}
log(missingNumber([0, 1, 2, 4]))