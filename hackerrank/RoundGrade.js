// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function roundUpGrade(grd) {
  for (let i = 0; i < grd.length; i++) {
    if (grd[i] > 37) {
      let remain = grd[i] % 5;
      if (remain > 2) {
        grd[i] += 5 - remain;
      }
    }
  }
  return grd;
}

let numbers = [4, 73, 67, 38, 33];
console.log(candlesSum(numbers));
