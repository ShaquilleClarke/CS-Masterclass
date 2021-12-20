/**
 * 
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
 * Print the decimal value of each fraction on a new line with  places after the decimal.
 * 
 * Ratio is frequency of element/length
 * 
 * arr = [1,1,0,-1,-1] => 2/5 = 0.400000, 2/5 = 0.400000, 1/5 = 0.200000
 * 
 * 
 * 
 * 
 * 
 * 
 */

const log = console.log;

const plusMinus = (arr) => {
    // create variables for positives, zeroes, and negatives
    let positives = 0, zeroes = 0, negatives = 0;
    const len = arr.length;

    // Loop through array to find the number of occurences 
    arr.forEach((int) => {
        if (int > 0) positives++;
        else if (int < 0) negatives++;
        else if (int === 0) zeroes++;
    })

    // Add six decimal places to the integers
    log((positives /= len).toFixed(6) + '\n' + 
        (negatives /= len).toFixed(6) + '\n' + 
        (zeroes /= len).toFixed(6)
    )
}

log(plusMinus([1,1,0,-1,-1]))