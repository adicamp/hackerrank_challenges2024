function breakingRecords(scores) {
  // Write your code here
  let result = [0, 0];
  let most = scores[0];
  let least = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > most) {
      result[0]++;
      most = scores[i];
    }
    if (scores[i] < least) {
      result[1]++;
      least = scores[i];
    }
  }
  return result;
}

let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

console.log(breakingRecords(scores));
