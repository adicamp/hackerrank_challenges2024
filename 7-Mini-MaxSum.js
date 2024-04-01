// Barbar
function miniMaxSum(arr) {
  // Write your code here
  let total = arr.sort().reduce((a, b) => a + b);
  let min = total - arr[arr.length - 1];
  let max = total - arr[0];
  console.log(min, max);
}

// Brainstorm AI
function miniMaxSum(arr) {
  // Write your code here
  let total = arr.reduce((a, b) => a + b);
  let min = total - Math.max(...arr);
  let max = total - Math.min(...arr);
  console.log(min, max);
}

let arr = [1, 2, 3, 4, 5];

miniMaxSum(arr);
