const log = console.log;
/*

Write an explanation on radix sort here

*/



const radixSort = (arr) => {
    if (arr.length < 2) return arr; // We don't bother sorting if there is only one element

    let maxVal = Math.max(...arr); // Initialize variable with the first element aa out default max value

    let digitCount = maxVal.toString().length; // Convert maxVal to string and get the length
    let buckets, buckIdx;
    for (let digit = 0; digit < digitCount; digit++) { // Loop until we reach the number of digits in the max value
        buckets = Array.from({length: 10}, () => []); // Initialize array of buckets for base 10 integers
        for (let i = 0; i < arr.length; i++) { // Loop through input array
            buckIdx = Math.floor(arr[i] / Math.pow(10, digit)) % 10; // Use the last digit in the current integer to find it's index destination
            buckets[buckIdx].push(arr[i]); // Add to bucket
        }
        arr = [].concat(...buckets); // Reset the array to the flattened buckets array
    }
    return arr;
}

log(radixSort([98, 25, 33, 40, 12]));