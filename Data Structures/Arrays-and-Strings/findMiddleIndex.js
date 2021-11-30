const log = console.log;

// const findMiddleIndex = (nums) => {
//     let total = 0, left = 0;

//     for (let i = 0; i < nums.length; i++) {
//         total += nums[i];
//     }

//     for (let i = 0; i < nums.length; i++) {
//         total -= nums[i];
//         if (total === left) return i;
//         left += nums[i];
//     }
//     return -1;
// }
const findMiddleIndex = (nums) => {
    const sum1 = [nums[0]], sum2 = [nums[nums.length-1]];

    for (let i = 1; i < nums.length; i++) {
        sum1.push(sum1[i-1]+nums[i]);
    }

    for (let i = nums.length-2; i >= 0; i--) {
        sum2.unshift(sum2[0]+nums[i]);
    }

    for (let i = 0; i < nums.length; i++) {
        if (sum1[i] === sum2[i]) return i;
    }
    return -1;
}
log(findMiddleIndex([1, 2, 3, 5, 6]))