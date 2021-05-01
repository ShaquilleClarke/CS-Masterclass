const log = console.log;

const maxProfit = (prices) => {
    let profit = 0, i = 1, today, yesterday;
    while (i < prices.length) {
        [today, yesterday] = [prices[i], prices[i-1]];
        if (today > yesterday) profit += today - yesterday;
        i++;
    }
    return profit;
}
log(maxProfit([7, 1, 5, 3, 6, 4]))