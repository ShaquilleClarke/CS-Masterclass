/*
target = 8

 0  1  2  3  4  5  6
[1, 2, 3, 4, 5, 6, 7]  mid = 3


*/

const log = console.log;

const divideAndConquer = (nums, target, left = 0, right = nums.length-1, map = {}) => {
    if (left > right) return -1;

    let mid = Math.floor((left + right)/2);
    let key = `${nums}|${target}`;

    if (!map[key]) {
        if (target === nums[mid]) map[key] = mid;
        else if (target < nums[mid]) map[key] =  divideAndConquer(nums, target, left, mid-1);
        else map[key] =  divideAndConquer(nums, target, mid+1, right);
    }
    return map[key];
}

log(divideAndConquer([1, 2, 3, 4, 5, 6, 7], 4))