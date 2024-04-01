function plusMinus(arr) {
  // Write your code here
  let pos = 0;
  let zer = 0;
  let min = 0;

  arr.forEach((num) => {
    if (num > 0) pos++;
    else if (num < 0) min++;
    else zer++;
  });

  console.log((pos / arr.length).toFixed(6));
  console.log((min / arr.length).toFixed(6));
  console.log((zer / arr.length).toFixed(6));
}

arr = [-4, 3, -9, 0, 4, 1];

plusMinus(arr);
