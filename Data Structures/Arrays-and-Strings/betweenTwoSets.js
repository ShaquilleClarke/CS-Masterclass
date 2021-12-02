/*


There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

The elements of the first array are all factors of the integer being considered
The integer being considered is a factor of all elements of the second array

These numbers are referred to as being between the two arrays. Determine how many such numbers exist.


a = [2, 6]
b = [24, 36]

return the number of integers between the two sets => how many times does x % a[i] and b[i] % x equal to 0?

*/

const log = console.log;

const getTotalX = (a, b) => {
    let count = 0;

    for (let i = 1; i <= 100; i++) {
        if (checkSet1(a, i) && checkSet2(b, i)) count++;
    }
    return count;
}

const checkSet1 = (arr, int) => {
    let i = 0;
    while(i < arr.length) {
        if (int % arr[i] === 0) i++;
        else return false;
    }
    return true;
}

const checkSet2 = (arr, int) => {
    let i = 0;
    while(i < arr.length) {
        if (arr[i] % int === 0) i++;
        else return false;
    }
    return true;
}

log(getTotalX([2, 4], [16, 32, 96]))
