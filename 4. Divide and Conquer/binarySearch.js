let binarySearch = (arr, n) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let midNum = arr[mid];
    if (midNum == n) {
      return mid;
    } else if (midNum > n) {
      right = mid;
    } else {
      left++;
    }
  }
  return -1;
};

let nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 17, 18, 20, 25, 34, 36, 39, 47,
  48, 49,
];

console.log(binarySearch(nums, 3));
