function arrSum(arr) {
  let sum = 0;
  let leng = arr.length;
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < leng; i++) {
    sum += arr[i];
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  console.log(sum - max, sum - min);
  // console.log(sum - arr[0]);
}

let numbers = [7, 69, 2, 221, 8974];
arrSum(numbers);
