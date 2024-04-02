function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let result = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      (ar[i] + ar[j]) % k == 0 ? result++ : null;
    }
  }
  return result;
}

let ar = [1, 3, 2, 6, 1, 2];
let n = 6;
let k = 3;

console.log(divisibleSumPairs(n, k, ar));
