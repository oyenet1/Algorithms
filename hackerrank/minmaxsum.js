function minMaxSum(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    // if (min > arr[i]) {
    //   min = arr[i];
    // }
    // if (max < arr[i]) {
    //   max = arr[i];
    // }
  }

  console.log(sum - arr[arr.length - 1], sum - arr[0]);
}

minMaxSum([1, 3, 5, 7, 9]);
