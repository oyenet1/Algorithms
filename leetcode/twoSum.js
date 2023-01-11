class TwoSum {
  // this following functions return the index of two numbers that make up a particular target out of an array
  constructor(nums, target) {
    this.nums = nums;
    this.target = target;
  }

  // method one by creating a distinct array
  methodOne() {
    let hMap = {};
    let ntF;
    for (let i = 0; i < this.nums.length; i++) {
      ntF = this.target - this.nums[i];
      if (hMap[ntF] && hMap[ntF] !== i) {
        return [hMap[ntF], i];
      }
      hMap[this.nums[i]] = i;
    }
    return -1;
  }
  methodTwo() {
    // let pNum = this.target - this.nums[0];
    for (let i = 1; i < this.nums.length; i++) {
      for (let j = i + 1; j < this.nums.length; j++) {
        if ((this.nums[i] + this.nums[j]) === this.target) {
          return [i, j];
        }
      }
    }
    return -1;
  }
}
var numbers = [6, 1, 3, 4, 2, 7];

let first = new TwoSum(numbers, 5);
console.log(first.methodOne());
console.log(first.methodTwo());
