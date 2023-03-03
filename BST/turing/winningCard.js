function LargestOne(arr) {
  let largest = -1;
  arr.forEach(el => {
    if (arr.indexOf(el) === arr.lastIndexOf(el)) {
      if (largest < el) {
        largest = el;
      }
    }
  });
  return largest;
}

function idenT(arr) {
  let lg = LargestOne(arr[0]);
  for (let j = 1; j < arr.length; j++) {
    if (lg < LargestOne(arr[j])) {
      lg = LargestOne(arr[j]);
    }
  }
  return lg;
}
let inputsOne = [[5, 5], [2, 2]];
let nums = [[5, 7, 3, 9, 4, 9, 8, 3, 1], [1, 2, 2, 4, 4, 1], [1, 2, 3]];
console.log(idenT(nums));