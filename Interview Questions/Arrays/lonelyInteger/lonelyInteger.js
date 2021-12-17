/*

Given an array of integers, where all elements but one occur twice, 
find the unique element.

a = [1,2,3,4,3,2,1], output = 4

*/

// Get the frequencies of all elements in array
  // Loop through the array and assign integers as keys and frequencies as values in obj
  
// Loop through obj
  // For key in obj where value === 1, return key

const log = console.log;

const lonelyInteger = (a) => {
    const freq = new Map();

    for (let num of a) {
        if(!freq.has(num)) {
            freq.set(num, 1);
        } else {
            freq.set(num, freq.get(num)+1);
        }
    }
    
    for (let [key, val] of freq.entries()) {
        if (val === 1) return key; 
    }
    return -1;
}

log(lonelyInteger([1,2,3,4,3,2,1]))