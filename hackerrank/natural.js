function ratio(nums) {
  let l = nums.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positive++;
    } else if (nums[i] === 0) {
      zero++;
    } else {
      negative++;
    }
  }
  positive /= l;
  negative /= l;
  zero /= l;
  // console.log(positive.toFixed(6));
  // console.log(negative.toFixed(6));
  // console.log(zero.toFixed(6));
  console.log(positive.toFixed(6), negative.toFixed(6), zero.toFixed(6));
}
ratio([-4, 3, -9, 0, 4, 1]);
