/*

You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
Example 3:

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17


Constraints:

m == accounts.length
n == accounts[i].length
1 <= m, n <= 50
1 <= accounts[i][j] <= 100

*/ 

const Log = console.log;

/*
    - Create a variable to store the max value
    - Iterate through each account
        - Sum the values of the individual account
        - Reset the "max" value if "sum" has a larger value
    - Return the max value
*/ 
const maximumWealth = (accounts) => {
    let maxValue = 0;
    // Log(`max value: ${maxValue}`)
    for(let i = 0; i < accounts.length; i++) 
    {
        let sum = 0;
        // Log(`Account number ${i+1}: ${accounts[i]}`)
        for(let j = 0; j < accounts[i].length; j++) 
        {
            // Log(`Customer ${i+1} has ${accounts[i][j]} USD in account number ${j+1}`)
            sum += accounts[i][j]
            // Log(`Current sum: ${sum}`)
        }
        maxValue = sum >= maxValue ? sum : maxValue;
        // Log(`Current max value: ${maxValue}`)

    }
    return maxValue
};
let accounts = [[2,8,7],[7,1,3],[1,9,5]]
Log(maximumWealth(accounts))