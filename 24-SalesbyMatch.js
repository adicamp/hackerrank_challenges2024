function sockMerchant(n, ar) {
  // Write your code here
  let paired = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[i] === ar[j]) {
        paired++;
        ar.splice(j, 1);
        break;
      }
    }
  }
  return paired;
}

let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let n = 9;

console.log(sockMerchant(n, ar));
