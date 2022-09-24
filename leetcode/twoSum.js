class TwoSum {
  // this following functions return the index of two numbers that make up a particular target out of an array
  constructor(nums, target) {
    this.nums = nums;
    this.target = target;
  }

  // method one by creating a distinct array
  methodOne() {
    let hashMap = {};
    for (let i = 0; i < this.nums.length; i++) {
      let nTF = this.target - this.nums[i];
      if (nTF in hashMap) {
        return [hashMap[nTF], i];
      }
      hashMap[this.nums[i]] = i;
    }
    return -1;
  }
}
var numbers = [6, 1, 3, 4, 2, 8];

let first = new TwoSum(numbers, 6);
console.log(first.methodOne());
