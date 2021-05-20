const log = console.log;

const removeDuplicates = (nums) => {
    let i = 1;
    while (i < nums.length) {
        if (nums[i] === nums[i-1]) {
            nums.splice(i-1, 1);
            i--;
        }
        i++;
    }
    return nums.length;
}
log(removeDuplicates([0, 0, 1, 1, 1, 2, 3, 3, 4]))