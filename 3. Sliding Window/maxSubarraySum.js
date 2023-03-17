function maxSubarraySum(arr, s) {
  let hSum = -Infinity;
  for (let i = 0; i < arr.length - s + 1; i++) {
    let temp = 0;
    for (let j = 0; j < s; j++) {
      temp += arr[i + j];
    }

    if (temp > hSum) {
      hSum = temp;
    }
  }
  return hSum;
}

let samples = [1, 4, 4, 2, 3, 4, 3, 1];