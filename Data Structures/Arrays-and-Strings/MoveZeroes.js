/*

Given an integer array nums, move all 0's to the end of it while maintaining 
the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

[1,0,0]
     ^
   ^

Example 2:

Input: nums = [0]
Output: [0]


*/

const log = console.log;

const moveZeroes = (nums) => {
    let i = 0, j = i;
    while (i < nums.length) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
        i++;
    }
    return nums;
}
log(moveZeroes([0,0,1]))