let sumZero = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] + nums[j]) == 0) {
        return [nums[i], nums[j]];
      }
    }
  }
  return undefined;
}

let methodTwo = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] == 0) {
      return [nums[left], nums[right]];
    } else if (nums[left] + nums[right] > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
}
let sample = [-6, -5, -2 - 1, 0, 1, 3, 4, 8];
console.log(methodTwo(sample));