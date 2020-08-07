// The pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays/strings

// Write a function called same()

// The function takes in two arrays which both hold a set of integers: same(arr1, arr2)

// The function should return true if each index in the first array

const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        const correctIndex = arr2.indexOf(arr1[i] ** 2);

        if (correctIndex === -1) return false;

        arr2.splice(correctIndex, 1);

        console.log('correct index: ', correctIndex)
        console.log(arr2);
    }
    return true;
}

console.log(same([1, 2, 4], [1, 4, 16]))