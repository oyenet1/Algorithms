// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function candlesSum(candles) {
  let leng = candles.length;
  let max = candles[0];
  let count = 0;
  for (let i = 0; i < leng; i++) {
    if (max < candles[i]) {
      max = candles[i];
    }
  }
  for (let i = 0; i < leng; i++) {
    if (max == candles[i]) {
      count++;
    }
  }

  return count;
}

let numbers = [7, 69, 2, 221, 8974, 8974];
candlesSum(numbers);
