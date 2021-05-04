const log = console.log;

const moveZeroes = (nums) => {
    let i = nums.length-1;
    while(i >= 0) {
        if(nums[i]===0){
            nums.splice(i,1)
            nums.push(0);
        }
        i--;
    }
    // return nums;
}
log(moveZeroes([0, 8, 8, 8, 0, 4]))