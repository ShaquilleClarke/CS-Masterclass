const log = console.log;

// This is a variation of twoSum where u must return the indices incremented by 1

const twoSumII = (numbers, target) => {
    let table = new Map(), n, diff;
    for (let i = 0; i < numbers.length; i++) {
        n = numbers[i];
        diff = target - n
        if (table.has(diff)) {
            return [table.get(diff)+1, i+1]
        }
        table.set(n, i)
    }
    return null; 
}

log(twoSumII([3, 5, 5, 7], 10))
//                  