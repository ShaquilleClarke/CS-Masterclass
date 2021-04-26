const log = console.log;

const twoSumII = (numbers, target) => {
    let sum, start = 0, end = numbers.length-1;
    while (start < end) {
        sum = numbers[start] + numbers[end];
        if(sum === target) return [++start, ++end]
        sum < target ? start++ : end--;
    }
    return null;  
}
log(twoSumII([3, 5, 5, 7], 10))