function lonelyInt(arr) {
  let result = arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));
  return Number(result.join())
}
let nums = [1, 3, 4, 2, 3, 4, 5, 6, 7, 4, 5, 6, 3, 2, 1];
console.log(lonelyInt(nums));