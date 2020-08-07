// The pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays/strings

// ==============================================================================================

// Write a function called same()

// The function takes in two arrays which both hold a set of integers: same(arr1, arr2)

// The function should return true if each index of the second array contain the squared values of the first array
// [1, 2, 4], [1, 4, 16] => true

// The frequency of the values must be the same 

//===================== Brute Force Solution ============================

// 1. Make sure the arrays are the same length. Return false if condition isn't met
// 2. Create a for loop to iterate through the first array
// 3. Use the indexOf() method on the second array to locate the index with the squared values. Store the results in a variable
// 4. If the index within the variable is not found (equal to -1), return false
// 5. Otherwise, call the splice() method on the second array and remove the located index
// 6. Return true outside the loop


// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) return false;

//     for (let i = 0; i < arr1.length; i++) {
//         const correctIndex = arr2.indexOf(arr1[i] ** 2);

//         if (correctIndex === -1) return false;

//         arr2.splice(correctIndex, 1);

//         console.log('correct index: ', correctIndex)
//         console.log(arr2);
//     }
//     return true;
// }

//==================== Simpler Solution ========================

// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) return false;

//     let frequency1 = {}, frequency2 = {};

//     for (let key of arr1) {
//         frequency1[key] = (frequency1[key] || 0) + 1
//     }
    
//     for (let key of arr2) {
//         frequency2[key] = (frequency2[key] || 0) + 1
//     }

//     for (let key in frequency1) {
//         if (!(key ** 2 in frequency2)) return false;

//         if (frequency2[key ** 2] !== frequency1[key]) return false;
//     }
//     return true;
// }

// console.log(same([1, 2, 4], [1, 4, 16]))
    




// ============================ Another Example ====================================
// We wan to know if the characters in the first string can be rearranged to create the second string

// We will return a boolean: true or false

// First we'll initialize two objects, one for each string

const anagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    let cache = {}

    for (let char of str1.split('')) {
        cache[char] = (cache[char] || 0) + 1
    }
    
    for (let char of str2.split('')) {
        if (!cache[char]) return false;
        // console.log('current char: ', char)
        // console.log('cache before: ', cache)
        cache[char] -= 1
        // console.log('cache after: ', cache)
    }
    return true;
}

    


console.log(anagram('doog', 'good'))