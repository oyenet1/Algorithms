// let sumZero = (nums) => {
//  for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//    if ((nums[i] + nums[j]) == 0) {
//     return [nums[i], nums[j]];
//    }
//   }
//  }
//  return undefined;
// }

// let m2 = function (arr) {
//  let l = 0;
//  let r = arr.length - 1;
//  while (l < r) {
//   let sum = arr[l] + arr[r];
//   if (sum < 0) {
//    l++;
//   } else if (sum > 0) {
//    r--;
//   } else {
//    return [arr[l], arr[r]];
//   }
//  }
// }

let sumZero = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j], count++];
      }
    }
  }
};

let sumZero2 = (arr) => {
  let count = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == 0) {
      return [arr[left], arr[right], count++];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
};

let sample = [-5, -2, -1, 0, 1, 3, 4, 6, 8];
console.log(sumZero2(sample));
