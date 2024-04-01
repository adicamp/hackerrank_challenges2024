// Brainstorm AI
function flippingBits(n) {
  // Write your code here
  let biner = n.toString(2).padStart(32, "0");
  let flipped = [...biner].map((bit) => (bit === "0" ? "1" : "0")).join("");

  return parseInt(flipped, 2);
}

let n = 2147483647;

console.log(flippingBits(n));
