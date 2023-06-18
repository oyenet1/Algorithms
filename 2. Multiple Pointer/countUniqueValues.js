let cUValues = (nums) => {
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
let methodTwo = (arr) => {
  if (arr.length < 1) {
    return undefined;
  }
  let left = 0;
  let right = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[right] > arr[left]) {
      left++;
      arr[left] = arr[right];
    }
    right++;
  }
  return left + 1;
}
let sample = [1, 1, 2, 2, 3, 3, 5, 5, 5, 6];
console.log(cUValues(sample));
console.log(methodTwo(sample));