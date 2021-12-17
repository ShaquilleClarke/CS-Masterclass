/*

nWrite a function that compares two arrays by returning all 
elements present in the first array that are not present in the second.


For example, given `[1, 2, 3, 4, 5]` and `[2, 4]` return `[1, 3, 5]`. 

Given `[1, 2, 3, 4, 5]` and `[6, 7]` return `[1, 2, 3, 4, 5]`.

*/

const log = console.log;

const arrDiff = (arr1, arr2) => {
    const set = new Set(arr2); // {2, 4}
    
    return arr1.filter((el) => { 
        return set.has(el) === false; // Return all elements not in set;
    });
}

log(arrDiff([1, 2, 3, 4, 5], [2, 4]));