function hurdleRace(k, height) {
  // Write your code here
  let max = Math.max(...height);
  return max < k ? 0 : max - k;
}

let k = 4;
let height = [1, 6, 3, 5, 2];

// let k = 7;
// let height = [2, 5, 4, 5, 2];

console.log(hurdleRace(k, height));
