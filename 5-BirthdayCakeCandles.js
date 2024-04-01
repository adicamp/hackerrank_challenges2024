// Barbar
function birthdayCakeCandles(candles) {
  // Write your code here
  let max = -Infinity;
  let count = 0;
  candles.forEach((candle) => {
    if (candle > max) {
      max = candle;
      count = 1;
    } else if (candle === max) {
      count++;
    }
  });
  return count;
}

// Brainstorm AI
function birthdayCakeCandles(candles) {
  // Write your code here
  let max = Math.max(...candles);
  return candles.filter((candle) => candle === max).length;
}

let candles = [3, 2, 1, 3];

console.log(birthdayCakeCandles(candles));
