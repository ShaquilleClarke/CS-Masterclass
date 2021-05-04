const log = console.log;

// const containsDuplicates = (nums) => {
//     const map = {};
//     for (let n of nums) {
//         if(map[n]) return true;
//         map[n] = 1;
//     }
//     return false;
// }


// Adding and removing vlues from a set is much quicker than
// doing the same in an array
// A set can only contain unique values, therefore the size of the set will
// not match the length of the array 
const containsDuplicates = (nums) => {
    let uniqueSet = new Set(nums);
    return uniqueSet.size === nums.length ? false : true;
}
log(containsDuplicates([1, 2]));