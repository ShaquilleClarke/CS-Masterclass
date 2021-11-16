/*

Given an integer array nums sorted in non-decreasing order, return an array of 
the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100]
After sorting, it becomes [0,1,9,16,100].

[0,1,9,16,100]
           ^

negative: [-4, -1, 0]
        ^
positive: [3, 10]
              ^




Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]


*/

const log = console.log;

const sortedSquares = (nums) => {
    const pos = [], neg = [], res = nums;
    for (let num of nums) {
        if (num > 0) pos.push(num)
        else neg.push(num);
    }
    let i = 0, j = neg.length-1, k = i;

    while (i < pos.length && j >= 0) {
        if (Math.abs(pos[i]) < Math.abs(neg[j])) {
            res[k] = pos[i]**2;
            i++;
            k++;
        } else {
            res[k] = neg[j]**2;
            j--;
            k++;
        }
    }
    
    while (i < pos.length) {
        res[k] = pos[i]**2;
        i++;
        k++;
    }
    while (j >= 0) {
        res[k] = neg[j]**2;
        j--;
        k++;
    }
    return res;
}
log(sortedSquares([-7,-3,2,3,11]))