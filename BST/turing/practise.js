function sumArray(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sumArray(array.slice(1));
  }
}

let nums = [12, 2, 3, 4, 6, 3]
console.log(sumArray(nums));