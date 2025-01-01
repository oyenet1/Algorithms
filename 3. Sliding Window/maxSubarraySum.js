function maxSubarraySum(arr, s) {
  let mSum = 0;
  for (let i = 0; i < s; i++) {
    mSum += arr[i];
  }
  let temp = mSum;
  for (let j = s; j < arr.length; j++) {
    temp = temp - arr[j - s] + arr[j];
    if (temp > mSum) {
      mSum = temp;
    }
  }
  return mSum;
}

let samples = [1, 4, 10, 4, 2, 11, 3, 4, 9, 3, 1];

console.log(maxSubarraySum(samples, 3));
