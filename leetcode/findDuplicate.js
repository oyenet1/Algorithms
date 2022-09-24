class FindDuplicate {
  // this following functions return true if there is any duplicate in an array
  constructor(nums) {
    this.nums = nums;
  }

  // method one by creating a distinct array
  methodOne() {
    let list = [];
    for (let i = 0; i < this.nums.length; i++) {
      if (list.includes(this.nums[i])) {
        return true;
      }
      list.push(this.nums[i]);
    }
    return false;
  }

  // method 2 by creating new empty set
  methodTwo() {
    let list = new Set();
    for (let i = 0; i < this.nums.length; i++) {
      if (list.has(this.nums[i])) {
        return true;
      }
      list.add(this.nums[i]);
    }
    return false;
  }

  methodThree() {
    return this.nums.length === new Set(this.nums).size ? false : true;
  }
}
var numbers = [1, 3, 4, 2];

let first = new FindDuplicate(numbers);
console.log(first.methodOne());
console.log(first.methodTwo());
console.log(first.methodThree());
