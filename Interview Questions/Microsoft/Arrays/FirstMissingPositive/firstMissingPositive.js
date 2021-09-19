// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses constant extra space.

 

// Example 1:

// Input: nums = [1,2,0]
// Output: 3

// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1

const log = console.log;

const firstMissingPositive = (nums) => {
    let i = 0;
    
    while (i < nums.length) {
        if (
            nums[i] > 0 &&
            nums[i] <= nums.length &&
            nums[nums[i]-1] !== nums[i]
        ) [nums[nums[i]-1], nums[i]] = [nums[i], nums[nums[i]-1]];
        else i++;
    }

    for ( let i = 0; i < nums.length; i++) {
        if (nums[i] !== i+1) return i+1;
    }
    return i+1;
};

log(firstMissingPositive([3,4,-1,1]))