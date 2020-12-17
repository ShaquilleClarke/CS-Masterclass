const log = console.log;

const binayrSearch = (arr, val) => {
    let start = 0, end = arr.length-1, mid;
    while (start <= end) {
        mid = Math.floor((start + end)/2);
        if(arr[mid] === val) return mid;
        else if(arr[mid] > val) end = mid - 1;
        else if(arr[mid] < val) start = mid + 1;
    }
    return -1;
}
log(binayrSearch([4, 6, 7, 11], 7))
log(binayrSearch([4, 6, 7, 11], 12))