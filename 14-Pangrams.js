// Barbar
function pangrams(s) {
  // Write your code here
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const str = s.split(" ").join("").toLowerCase();
  for (let alphabet of alphabets) {
    if (!str.includes(alphabet)) return "not pangram";
  }
  return "pangram";
}

// Inspired by Forum
function pangrams(s) {
  // Write your code here
  const result = s
    .toLowerCase()
    .split("")
    .filter((val, idx, arr) => arr.indexOf(val) === idx && val !== " ");
  return result.length === 26 ? "pangram" : "not pangram";
}

let s = "We promptly judged antique ivory buckles for the next prize";
// let s = 'We promptly judged antique ivory buckles for the prize';

console.log(pangrams(s));
