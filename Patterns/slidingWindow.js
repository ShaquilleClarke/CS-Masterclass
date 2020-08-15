const assert = require('assert').strict;
// This pattern invloves creating a window which can either be an array or number from one position to 
// another
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc

// Write a function called maxSubArraySum which accepts an array of integers and a number called n. This 
// function should calculate the maximum sum of n consecutive elements in the array

const maxSubArraySum = (arr, n) => {
    let tempSum = 0, maxSum = 0;

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum; 
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        // console.log(tempSum)
        maxSum = Math.max(maxSum, tempSum);
        // console.log('maxSum is:', maxSum)
    }
    return maxSum;
}

assert.deepStrictEqual(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2), 10)
console.log('result: ', maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2))


