function twoSumLength(arr, k) {
  var newA = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (i === j) continue;
      let add = arr[i] + arr[j];
      if (add <= k && add > newA) {
        newA = arr[i] + arr[j];
      }
    }
  }
  return newA;
}

// turing test
let numbers = [4, 5, 3, 2, 12];
console.log(twoSumLength(numbers, 20));
