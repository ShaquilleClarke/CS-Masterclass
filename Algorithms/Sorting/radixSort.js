const log = console.log;

const radixSort = (arr) => {
    const maxNum = Math.max(...arr) * 10;
    let divisor = 10, buckets;
    while (divisor < maxNum) {
        buckets = [...Array(10)].map(() => []);
        
        for (let num of arr) {
            buckets[Math.floor((num % divisor) / (divisor/10))].push(num);
        }
       
        arr = [].concat.apply([], buckets);
        
        divisor *= 10;
    }
    return arr;
}

log(radixSort([98, 25, 33, 40, 12]));