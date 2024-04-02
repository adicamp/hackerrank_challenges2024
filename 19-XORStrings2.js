// Barbar
function strings_xor(input) {
  // Write your code here
  let [str1, str2] = input.split(" "); // change "\n" with " " for vscode environment
  let result = "";
  for (let i = 0; i < str1.length; i++) {
    str1[i] === str2[i] ? (result += "0") : (result += "1");
  }
  console.log(result);
}

// With built-in methodes
function strings_xor(input) {
  // Write your code here
  let [str1, str2] = input.split(" ");
  let result = str1
    .split("")
    .map((el, i) => (el === str2[i] ? "0" : "1"))
    .join("");
  console.log(result);
}

let input = "10101 00101";

strings_xor(input);

// In this challenge, it seems there's a problem.
// My answer matches, but it's still marked wrong.
// And I've noticed many others facing the same issue.
