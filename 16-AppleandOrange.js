// Barbar
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let result = [0, 0];
  apples.forEach((apple) =>
    a + apple >= s && a + apple <= t ? result[0]++ : null
  );

  oranges.forEach((orange) =>
    b + orange >= s && b + orange <= t ? result[1]++ : null
  );

  result.forEach((res) => console.log(res));
}

// Brainstorm AI
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  console.log(
    apples.filter((apple) => a + apple >= s && a + apple <= t).length
  );
  console.log(
    oranges.filter((orange) => b + orange >= s && b + orange <= t).length
  );
}

let s = 7;
let t = 11;
let a = 5;
let b = 15;
let apples = [-2, 2, 1];
let oranges = [5, -6];

countApplesAndOranges(s, t, a, b, apples, oranges);
