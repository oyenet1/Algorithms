let binarySearch = (arr, n) => {
 let left = 0;
 let right = arr.length - 1;

 while (left < right) {
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === n) {
   return mid;
  } else if (arr[mid] > n) {
   right = mid;
  } else {
   left = mid;
  }
 }
 return -1;
}


let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 17, 18, 20, 25, 34, 36, 39, 47, 48, 49];

console.log(binarySearch(nums, 12));