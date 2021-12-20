/*

Given an integer, target, and an array of non-negative integers, numbers, determine
how the target can be generated from the numbers in the array. If the target can be generated, 
return the elements in an array. If not, return null 

canSum(8, [2, 3, 5]) => [2,2,2,2]

*/

const log = console.log;

const howSum = (target, numbers, memo = new Map()) => {
    if (memo.has(target)) return memo.get(target)
    if (target === 0) return [];
    if (target < 0) return null;

    for (let num of numbers) {
        const remainder = target - num,
        remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult) {
            memo.set(target, [...remainderResult, num])
            return memo.get(target);
        }
    }
    memo.set(target, null);
    return null;
}

log(howSum(300, [189, 111]))