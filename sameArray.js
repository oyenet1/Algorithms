/*
write a function called same, which accept two arrays. The function should return true if the values in the array has it's corresponding value squared in the second array. The frequency of the value must be the same

*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let ind = exist(arr2, arr1[i]);
    if (ind < 0) {
      return false;
    }
    arr2.splice(ind, 1);
  }
  return true;
}

function exist(arr, el) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === el ** 2) {
      return j;
    }
  }
  return -1;
}


function methodTwo(arr1, arr2 = null) {
  let ob1 = {};
  let ob2 = {};
  for (let i of arr1) {
    ob1[i] = ++ob1[i] || 1;
  }
  for (let j of arr2) {
    ob2[j] = ++ob2[j] || 1;
  }
  for (let key in ob1) {
    if (!(key ** 2 in ob2)) {
      return false;
    }
    if (ob2[key ** 2] !== ob1[key]) {
      return false;
    }
  }
  return true;
}

let a = [1, 2, 3, 2, 2];
let b = [4, 9, 4, 1];

console.log(methodTwo(a, b));