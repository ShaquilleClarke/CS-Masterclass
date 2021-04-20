let log = console.log;

let cities = [];
cities[0] = 'New York';
cities[1] = 'Los Angeles';
cities.length = 1;
cities[cities.length] = 'San Francisco';
cities.length = 2;
cities[cities.length] = 'Calabasas';


// log(cities)

// const performOps = (A) => {
//     m= A.length
//     n=A[0].length
//     B=[]
//     for(i = 0; i < m;i++){
//         B.push(new Array(n));
//         for(j=0;j< n;j++){
//             B[i][n-1-j] = A[i][j]
//         }
//     }
//     return B
// }

// let output = performOps([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
// for (i = 0; i < B.length; i++) {
//     for (j = 0; j < B[i].length; j++) 
//         log(output[i][j]+" ");
// }
