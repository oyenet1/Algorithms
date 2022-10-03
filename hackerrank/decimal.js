// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

function getFraction(arr) {
  let leng = arr.length;
  let odds = [0, 0, 0];
  for (let i = 0; i < leng; i++) {
    if (arr[i] > 0) {
      odds[0]++;
    } else if (arr[i] < 0) {
      odds[1]++;
    } else {
      odds[2]++;
    }
  }
  return [
    (odds[0] / leng).toFixed(6),
    (odds[1] / leng).toFixed(6),
    (odds[2] / leng).toFixed(6),
  ];
}

var numbers = [1, 0, 0, 1, -1, -1];
console.log(getFraction(numbers));
