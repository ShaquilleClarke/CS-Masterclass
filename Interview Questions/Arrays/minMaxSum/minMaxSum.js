const log = console.log;

/* Sort when looking for max values */

const miniMaxSum = (arr) => {
    
    let arrSort = arr.sort((a,b) => a-b), // Sort from lowest to highest
    sum = arrSort.reduce((prev, curr) => prev+curr), // Sum all the elements
    min = sum - arrSort[arrSort.length-1], max = sum - arrSort[0]; // min is sum minus last element, max is sum minus first element

    log(min, max);
}
log(miniMaxSum([7,69,2,221,8974]));