const assert = require('assert').strict;

// Creating pointers or values that correspond to an index or position and moves towards the beginning,
// middle, or end based on a certain condition 

// Very efficient for solving problems with minimal space complexity



// const sumZero = (ints) => {
//     // this function accepts an assorted array of integers
//     // the function should find the first pair where the sum is 0
//     // Return an array that has the pairs with a sum of zero or undefined if a pair doesn't exist
//     // [-3, -2, -1, 0, 1, 2, 3, 4, 5] => [-3, 3]
//     // [-2, 0, 1, 3] => undefined
//     // [1, 2, 3] => undefined

//     // ==== Steps ====

//     // Grab both pointers of the array (start, end)
//     // Store the sum of the pointers
//     // Check if the sum is greater than 0. If it is, return both pointers in an array
//     // If the sum is greater than zero, decrement the end pointer
//     // Otherwise, increment the start pointer

// }

// const sumZero = (arr) => {
//     let start = 0, end = arr.length - 1;

//     while (start < end) {
//         let sum = arr[start] + arr[end];

//         if (sum === 0) return [arr[start], arr[end]];
//         else if (sum > 0) end--;
//         else start ++
//     }
// }

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 4, 5]))


// const countUniqueValues = (arr) => {
    // The function accepts an assorted array
    // Return the number of unique values in the array
    // [1, 1, 1, 1, 1, 2] => 1
    // [1, 2, 2, ,3] => 2
// }

// const countUniqueValues = (arr) => {
//     let start = 0, next = 1;

//     if (arr.length === 0) return 0;

//     while (next < arr.length) {
//         if (arr[start] !== arr[next]) {
//             start++;
//             arr[start] = arr[next];
//         }
//         next++;
//     }
//     return start + 1;
// }


// assert.deepStrictEqual(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]), 7);

// console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7])); 
// console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]))



//==============================================

// const averagePair = (arr, val) => {
//     if (arr.length === 0) return false;

//     let start = 0, end = arr.length -1;

//     while (start < end) {
//         let avr = (arr[start] + arr[end] / 2)
//         if (val > avr) start++;
//         else if (val < avr) end--;
//         else return true;
//     }
//     return false;
// }

// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))

//====================================================

const isSubsequence = (str1, str2) => {
    let i = 0, j = 0;
    if(!str1) return true;
    while(j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

console.log(isSubsequence('sing', 'sting'))

