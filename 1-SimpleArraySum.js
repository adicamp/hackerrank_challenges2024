function simpleArraySum(ar) {
  // Write your code here
  return ar.reduce((a, b) => a + b);
}

let ar = [1, 2, 3, 4, 10, 11];

console.log(simpleArraySum(ar));
