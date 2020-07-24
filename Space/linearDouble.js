const double = (arr) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    // elements of the new array are being created with
    // each loop. this creates a linear space complexity
    // space complexity is O(n)
    return newArr;
}

console.log(double([2, 4, 6, 8, 55, 88, 75764, 932793722, 3936162169613231]))