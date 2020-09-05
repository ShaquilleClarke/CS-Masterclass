const assert = require('assert').strict;
// This pattern invloves creating a window which can either be an array or number from one position to 
// another
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc

// Write a function called maxSubArraySum which accepts an array of integers and a number called n. This 
// function should calculate the maximum sum of n consecutive elements in the array

// const maxSubArraySum = (arr, n) => {
//     let tempSum = 0, maxSum = 0;

//     for (let i = 0; i < n; i++) {
//         maxSum += arr[i];
//     }
//     tempSum = maxSum; 
//     for (let i = n; i < arr.length; i++) {
//         tempSum = tempSum - arr[i - n] + arr[i];
//         // console.log(tempSum)
//         maxSum = Math.max(maxSum, tempSum);
//         // console.log('maxSum is:', maxSum)
//     }
//     return maxSum;
// }

//assert.deepStrictEqual(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2), 10)
//onsole.log('result: ', maxSubArraySum([100, 200, 300, 400], 2))

//=============Alternate Take================

// Given an array of integers and a number, write a function which finds the maximum sum of a subarray
// with the length of the number passed into the function

// The subarray must consist of consecutive elements from the original array.

// const maxSubArraySum = (arr, n) => {
//     if (arr.length < n) return null;

//     let total = 0, currentTotal = 0;

//     for (let i = 0; i < n; i++) {
//         total += arr[i];
//     }
//     currentTotal = total;
//     for (i = n; i < arr.length; i++) {
//         currentTotal += arr[i] - arr[i - n];
//         total = Math.max(total, currentTotal);
//     }
//     return total;
// }
// console.log(maxSubArraySum([100, 200, 300, 400], 2))

//=================================================================

// Write a function that accepts two parameters, an array of positive integers and positive number.
// The function should return the minimal length of a contiguous subarray of the which the sum is greater than
// or equal to the number passed in to the function. If there isn't one, return 0 

const minSubArrayLen = (arr, sum) => {
    let end = 0, total = 0, start = 0, minLen = Infinity;

    while (start < arr.length) {
        if (total < sum && end < arr.length) {
            total += arr[end];
            end++
        }
        else if (total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= arr[start];
            start++;
        }
        else break
    }
    return minLen === Infinity ? 0 : minLen;
}
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9))



