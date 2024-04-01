// Barbar
function matchingStrings(strings, queries) {
  // Write your code here
  let result = [];
  queries.forEach((query) => {
    result.push(strings.filter((string) => string == query).length);
  });

  return result;
}

// Inspired by Forum
function matchingStrings(strings, queries) {
  // Write your code here
  return queries.map(
    (query) => strings.filter((string) => string == query).length
  );
}

let strings = ["aba", "baba", "aba", "xzxb"];
let queries = ["aba", "xzxb", "ab"];

console.log(matchingStrings(strings, queries));
