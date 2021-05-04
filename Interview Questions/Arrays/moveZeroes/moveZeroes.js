const log = console.log;

// const moveZeroes = (nums) => {
//     let i = 0
//     while(i < nums.length) {
//         if(nums[i] === 0){
//             nums.splice(i,1)
//             nums.push(0);
//         }
//         i++;
//     }
//     return nums;
// }

const moveZeroes = (nums) => {
    let i = 1, j = 0;
    while(i < nums.length) {
        if(nums[j] === 0 && nums[i] > 0){
            [nums[j], nums[i]] = [nums[i], nums[j]];
        }
        if (nums[j] > 0) j++;
        i++;
    }
    return nums;
}
log(moveZeroes([0, 8, 8, 8, 0, 4]))