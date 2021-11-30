/*

You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.

One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's 
width and height.

Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).

Note: You cannot rotate an envelope.


Example 1:

Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
Output: 3
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).


Example 2:

Input: envelopes = [[1,1],[1,1],[1,1]]
Output: 1

*/

const log = console.log;

const maxEnvelopes = (envelopes) => {
    const env = envelopes.sort((a,b) => {
        if (a[0] === b[0]) {return a[1] - b[1]};
        return a[0] - b[0]
    });
    let lis = new Array(env.length).fill(1), max = 1;
    
   
    for (let i = 1; i < env.length; i++) {
        for (let j = 0; j < i; j++) {
            if (env[i][0] > env[j][0] &&
                env[i][1] > env[j][1]
            ) {
                lis[i] = 1 + lis[j];
                max = Math.max(max, lis[i]);
            }
        }
    }
    return max;
};

log(maxEnvelopes([[2,100],[3,200],[4,300],[5,500],[5,400],[5,250],[6,370],[6,360],[7,380]]))