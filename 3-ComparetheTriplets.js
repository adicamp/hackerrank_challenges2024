function compareTriplets(a, b) {
  let result = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) result[0]++;
    else if (a[i] < b[i]) result[1]++;
  }

  return result;
}

const a = [5, 6, 7];
const b = [3, 6, 10];

console.log(compareTriplets(a, b));
