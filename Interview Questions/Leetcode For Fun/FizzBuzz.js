/*

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

Constraints:

1 <= n <= 104

*/ 
const Log = console.log;

/*

    - Create a "results" array
    - Create a for loop for the length of the input number. Initialize i with the value of 0
        - If i + 1 is divisible by 3 and 5, add "FizzBuzz" to the array
        - If i + 1 is divisible by 3, add "Fizz" to the array
        - If i + 1 is divisible by 5, add "Buzz" to the array
        - Otherwise, convert i + 1 to a string and add to the array

*/ 

const fizzBuzz = (num) => {

}