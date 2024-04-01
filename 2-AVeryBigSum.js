function aVeryBigSum(ar) {
  // Write your code here
  return ar.reduce((a, b) => BigInt(a) + BigInt(b), 0n);
}

const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(aVeryBigSum(ar));
