// Barbar
function birthday(s, d, m) {
  // Write your code here
  let len = s.length == 1 ? 1 : s.length - 1;
  let result = [];
  for (let i = 0; i < len; i++) {
    let res = 0;
    for (let j = i; j < i + m; j++) {
      res += s[j];
    }
    result.push(res);
  }
  return result.filter((el) => el == d).length;
}

// Inspired by Forum
function birthday(s, d, m) {
  // Write your code here
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let res = 0;
    for (let j = i; j < i + m; j++) {
      res += s[j];
    }
    res === d ? result++ : null;
  }
  return result;
}

let s = [2, 2, 1, 3, 2];
let d = 4;
let m = 2;

// let s = [4];
// let d = 4;
// let m = 1;

console.log(birthday(s, d, m));
// birthday(s, d, m);
