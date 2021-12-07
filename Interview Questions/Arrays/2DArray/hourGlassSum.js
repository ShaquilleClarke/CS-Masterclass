const log = console.log;

const hourGlassSum = (arr) => {
    let max = -Infinity, sum, top, mid, btm;
    for (let row = 0; row < 4; row++) 
    {
        for(let col = 0; col < 4; col++) 
        {
            
            top = arr[row][col] + 
            arr[row][col+1] +
            arr[row][col+2]; 
            
            mid = arr[row+1][col+1]; 

            btm = arr[row+2][col] + 
            arr[row+2][col+1] +
            arr[row+2][col+2]; 

            sum = top+mid+btm;
            max = Math.max(max, sum); 
        }
    }
    return max;
}

log(hourGlassSum(
    [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ]
))