// Barbar
function getTotalX(a, b) {
  // Write your code here
  let result = 0;
  for (let i = a[a.length - 1]; i <= b[0]; i++) {
    const res = [];
    a.forEach((element) => {
      res.push(i % element == 0 ? true : false);
    });

    b.forEach((element) => {
      res.push(element % i == 0 ? true : false);
    });
    if (res.every((element) => element == true)) result++;
  }
  return result;
}

// Inspired by Forum
function getTotalX(a, b) {
  let result = 0;
  for (let i = Math.max(...a); i <= Math.min(...b); i++) {
    a.every((element) => i % element == 0)
      ? b.every((element) => element % i == 0)
        ? result++
        : null
      : null;
  }
  return result;
}

let a = [2, 4];
let b = [16, 32, 96];

console.log(getTotalX(a, b));
