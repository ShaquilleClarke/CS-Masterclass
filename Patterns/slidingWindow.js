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

const minSubArrayLen = (arr, target) => {
    let wndwStart = 0, tempSum = 0, minSet = Number.MAX_VALUE;
    
    for (let wndwEnd = 0; wndwEnd < arr.length; wndwEnd++) {
        tempSum += arr[wndwEnd];
        while (tempSum >= target) {
            // if (wndwEnd === arr.length) return 0;
            minSet = Math.min(minSet, wndwEnd - wndwStart + 1);
            tempSum -= wndwStart;
            wndwStart++;
        }
    }
    // return minSet
    console.log(minSet)
}
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))
//console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))
//console.log(minSubArrayLen([2, 1, 6, 5, 4], 9))
//console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39))
//console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55))
//console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11))
//console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95))


