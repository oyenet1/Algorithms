let cUValues = (nums) => {
  if (nums.length < 1) {
    return undefined;
  }
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
};

// using two pointer
let methodTwo = (arr) => {
  if (arr.length < 1) {
    return undefined;
  }
  let left = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[left] !== arr[j]) {
      left++;
      arr[left] = arr[j];
    }
  }
  return left + 1;
};
let sample = [2, 3, 3, 5, 5, 5, 6, 35];
console.log(cUValues(sample));
console.log(methodTwo(sample));
