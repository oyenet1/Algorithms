function bs(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  let count = 0;

  for (let i = 0; l <= r; i++) {
    let m = Math.floor((r + l) / 2);
    if (arr[m] > target) {
      r = m - 1;
    } else if (arr[m] < target) {
      l = m + 1;
    }
    else {
      return m + ' count: ' + count;
    }
    count++;
  }

  return 'number not found';
}

function ls(arr, t) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == t) {
      return i + ' count: ' + count;
    }
    count++;
  }
  return 'number not found';
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

console.log(bs(numbers, 16));
console.log(ls(numbers, 16));