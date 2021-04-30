const log = console.log;

// Solved using the Boyer-Moore algo

const majorityElement = (nums) => {
    let candidate = 0, count = 0;
    for (let val of nums) {
        if (count === 0) candidate = val;
        count += candidate === val ? 1 : -1;
    }
    return candidate;
}
log(majorityElement([2, 2, 1, 1, 1, 2, 2]))