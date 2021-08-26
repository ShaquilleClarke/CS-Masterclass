// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is rotated at an unknown pivot index k 
//(0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], 
//nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated 
//at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4


// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1

const log = console.log;

const search = (nums, target) => {
    const len = nums.length;
    if (len < 1) return -1;
    else if (len < 2) return nums[0] === target ? 0 : -1;

    let left = 0, right = len-1, mid;

    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] === target) return mid;
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        } else {
            if (target > nums[mid] && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }
    return -1;
}

log(search([4,5,6,7,0,1,2], 6))



// Simpler yet slower method below

// const search = (nums, target) => {
//     const len = nums.length;
//     if(len < 1) return -1;
//     else if (len < 2) return nums[0] === target ? 0 : -1;

//     let mid, left = 0, right = len-1;
//     while (left < right) {
//         mid = Math.floor(left + (right - left)/2);
//         if (nums[mid] > nums[right]) left = mid + 1;
//         else right = mid;
//     }
//     let rP = left, realMid;
//     left = 0, right = len-1;
//     while (left <= right) {
//         mid = Math.floor(left + (right - left)/2);
//         realMid = (mid+rP)%len;
//         // log('rp + mid = ', mid+rP);
//         // log('sum of mid and rP mod len = ', (mid+rP)%len);
//         if(nums[realMid] === target) return realMid;
//         else if (target > nums[realMid]) left = mid+1;
//         else right = mid-1;
//     }
//     return -1;
// };