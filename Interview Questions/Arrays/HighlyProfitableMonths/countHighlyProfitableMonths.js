/*

Given an array of stock prices and an integer k representing a window of months,
return the number of highly profitable months in the array


Within a window with the length of 3, return the highest integers

*/

const log = console.log;


const countHighlyProfitableMonths = (stockPrices, k) => {
    if (k === stockPrices.length) return 1;
    
    let i = 0, j = k-1, profitableMonths = 0;

    while (j < stockPrices.length) {
        if (stockPrices[i] <= stockPrices[j]) profitableMonths++;
        i = j;
        j+= k-1;
    }
    return profitableMonths;
}

log(countHighlyProfitableMonths([1, 2, 3, 3, 4, 5], 3)) //expected output: 5