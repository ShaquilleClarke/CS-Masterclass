/*

Given an array nums of integers, return how many of them contain an even number of digits.


Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.


Example 2:

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.

Constraints:

1 <= nums.length <= 500
1 <= nums[i] <= 10^5

*/ 

const Log = console.log;

/*
    - Create a variable for our output count
    - Loop through array for numbers greater than 10
        - Convert number to string
        - If length of string is evenly divisible by 2, increment the output variable

*/ 


const findNumbers = (nums) => {
    let count = 0, digitLength;
    for (let i = 0; i < nums.length; i++) 
    {
        if (nums[i] >= 10) 
        {
            digitLength = `${nums[i]}`.split("").length;
            if (digitLength % 2 === 0) count++;
        }
    }
    return count;
};
Log(findNumbers([555,901,482,1771]))