var biSearch = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] > target) {
      r = m - 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      return m;
    }
  }
  return -1
}
console.log(biSearch([-1, 0, 3, 9, 13, 17, 20, 23, 34, 56, 59, 78], -1));