function bonAppetit(bill, k, b) {
  // Write your code here
  let bActual =
    bill.reduce((acc, curr, idx) => (idx !== k ? acc + curr : acc)) / 2;
  bActual === b ? console.log("Bon Appetit") : console.log(b - bActual);
}

let bill = [3, 1, 0, 2, 9];
let k = 1;
let b = 7;

bonAppetit(bill, k, b);
