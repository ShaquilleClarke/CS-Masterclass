//Given a list of items, each with a weight and a value, determine the count of each item to include 
//in a knapsack collection so that the total weight should not exceed the given limit and the total 
//value is as large as possible.
const log = console.log;

const knapSack = (values, weights, n, target, lookup) => {

  if (target < 0) return Number.MIN_SAFE_INTEGER;

  if (n < 0 || target == 0) {
    return 0;
  }
  
  const key = `${n}|${target}`;

  if (!lookup.has(key)) {
    let include = values[n] + knapSack(values, weights, n - 1, target - weights[n], lookup);
    let exclude = knapSack(values, weights, n - 1, target, lookup);
    
    lookup.set(key, Math.max(include, exclude));
  }
  return lookup.get(key);
  
}
const values = [20, 5, 10, 40, 15, 25];
const weights = [1, 2, 3, 8, 7, 4];
const target = 10;
let lookup = new Map();
log(knapSack(values, weights, values.length-1, target, lookup));