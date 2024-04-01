function diagonalDifference(arr) {
  // Write your code here
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i][i] - arr[i][arr.length - 1 - i];
  }
  // return result < 0 ? result * -1 : result;
  return Math.abs(result);
}

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(arr));
