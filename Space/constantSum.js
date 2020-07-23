const sum = (arr) => {
    // we initialized to variables containing integers
    // we are adding to the variables based off the 
    // length rather than creating variables based of the length
    // this makes the space complexity constant or
    // O(1) space
    let total = 0;  

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sum([1, 2, 3]))