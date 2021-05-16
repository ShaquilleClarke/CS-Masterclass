const log = console.log;

const maxProfit = (prices) => {
    let max = 0, min = Infinity, i = 0;
    
    while (i < prices.length) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
        i++;
    }
    return max;
}
log(maxProfit([2, 1, 2, 0, 1]))
