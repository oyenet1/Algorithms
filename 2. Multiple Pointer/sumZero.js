let sumZero = (nums) => {
 for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
   if ((nums[i] + nums[j]) == 0) {
    return [nums[i], nums[j]];
   }
  }
 }
 return undefined;
}

let m2 = function (arr) {
 let l = 0;
 let r = arr.length - 1;
 while (l < r) {
  let sum = arr[l] + arr[r];
  if (sum < 0) {
   l++;
  } else if (sum > 0) {
   r--;
  } else {
   return [arr[l], arr[r]];
  }
 }
}
let sample = [-5, -2, -1, 0, 1, 3, 5, 8];
console.log(m2(sample));

