/*

Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2


Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1


Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4


Example 4:

Input: nums = [1,3,5,6], target = 0
Output: 0


Example 5:

Input: nums = [1], target = 0
Output: 0

*/

const log = console.log;

// Brute force solution

const searchInsert = (nums, target) => {
    let start = 0, end = nums.length-1, mid;
    
    while (start <= end) {
        mid = Math.floor((start+end)/2);
        if (nums[mid] === target) return mid;
        else if (target > nums[mid]) start = mid+1;
        else end = mid-1;
    }
    if (target < nums[mid]) return mid;
    else if (target > nums[mid]) return mid+1;
};

// Alternative solution
// const searchInsert = (nums, target) => {
//     const search = (start, end) => {
//         if (start > end) return start;
        
//         let mid = Math.floor((start + end)/2);
    
//         if (nums[mid] === target) return mid;
//         else if (target < nums[mid]) return search(start, mid-1);
//         else return search(mid+1, end);
//     }
//     return search(0, nums.length - 1);
// };

log(searchInsert([1,3,5,6],7))
