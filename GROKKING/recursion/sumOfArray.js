function sumOfArr(arr) {
  total = 0;
  arr.forEach(el => {
    total += el;
  });
  return total;
}


function methodTwo(arr) {
  let leng = arr.length;
  let total = 0;
  if (arr.length < 0) {
    return 0;
  } else {
    return total += methodTwo(arr[arr.length - 1]);
  }
}
let nums = [3, 5, 2, 1, 4];
console.log(methodTwo(nums));