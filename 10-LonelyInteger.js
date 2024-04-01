// Barbar
function lonelyinteger(a) {
  // Write your code here
  a.sort();
  for (let i = 0; i < a.length; i += 2) {
    if (a[i] != a[i + 1]) {
      return a[i];
    }
  }
}

// Inspired by Forum
function lonelyinteger(a) {
  // Write your code here
  return a.reduce((res, nex) => res ^ nex);
}

let a = [1, 2, 3, 4, 3, 2, 1];

console.log(lonelyinteger(a));
