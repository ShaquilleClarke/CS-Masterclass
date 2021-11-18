/*

Given an array, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
[7,6,5,4,3,2,1]
[5,6,7,4,3,2,1]
[5,6,7,1,2,3,4]

Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]


Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

*/

/* Not Solved */

const log = console.log;

// const rotate = (nums, k) => {
//     if (k < 1 || !k) return nums;

//     const res = nums;

//     if (k === 1) {
//         res.unshift(res.pop()); 
//         return res;
//     };

//     let insert = 0;

//     while (insert < k) {
//         res.unshift(res.pop());
//         insert++;
//     }

//     return res;
// };

const rotate = (nums, k) => {
   let mid = Math.floor((0 + nums.length)/k),
   right = nums.slice(mid+1);

   nums = nums.slice(0, mid+1)
   nums.unshift(...right)
   return nums;
};
log(rotate([-1,-100,3,99], k = 2));