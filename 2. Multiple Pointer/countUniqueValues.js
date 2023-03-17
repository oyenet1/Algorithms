let cUValues = function (nums) {
  let numV = {};
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    numV[nums[i]] = ++numV[nums[i]] || 1;
  }
  for (let key in numV) {
    count++;
  }
  // return Object.keys(numV).length;
  return count;
}

// using two pointer
let methodTwo = function (nums) {
  if (nums.length == 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
let sample = [1, 1, 2, 2, 3, 3, 5, 5, 5, 6];
console.log(cUValues(sample));
console.log(methodTwo(sample));