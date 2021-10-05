// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].


// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

const log = console.log;

const merge = (intervals) => {
    if (intervals.length < 2) return intervals
    
    let intArr = intervals, i = 1;
    intArr.sort((a, b) => a[0] - b[0])
    const res = [intArr[0]];

    while(i < intArr.length) {
        if (res[res.length-1][1] >= intArr[i][0]) {
            res[res.length-1][1] = Math.max(res[res.length-1][1], intArr[i][1])
        } else {
            res.push(intArr[i]);
        }
        i++;
    }
    return res;
};

log(merge([[4,5],[1,4],[0, 1]]));
// log(sort([[1,4],[0, 2],[3, 5]]));