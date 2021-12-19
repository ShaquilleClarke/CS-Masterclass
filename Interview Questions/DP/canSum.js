/*

Given an integer, target, and an array of non-negative integers, numbers, determine
if the target can be generated from the numbers in the array

canSum(7, [5,3,4,7]) => true

*/

const log = console.log;

const canSum = (target, numbers, memo = new Map()) => {
    if (memo.has(target)) return memo.get(target)
    if (target === 0) return true;
    if (target < 0) return false;

    for (let num of numbers) {
        let remainder = target - num;
        if (canSum(remainder, numbers, memo) === true) {
            memo.set(target, true)
            return true;
        }
    }
    memo.set(target, false);
    return false;
}


log(canSum(8, [2, 3, 5]))