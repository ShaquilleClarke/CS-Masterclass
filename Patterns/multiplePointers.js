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

const sumZero = (arr) => {
    let start = 0, end = arr.length - 1;

    while (start < end) {
        let sum = arr[start] + arr[end];

        if (sum === 0) return [arr[start], arr[end]];
        else if (sum > 0) end--;
        else start ++
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 4, 5]))