class Palindrome {
  // this following functions return the index of two numbers that make up a particular target out of an array
  constructor(letters) {
    this.letters = letters;
  }

  // method one by creating a distinct array
  methodOne() {
    let result = false;
    this.letters = this.letters.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
    if (this.letters.length <= 1) {
      result = true;
    }
    let right = this.letters.length - 1;
    let left = 0;
    while (left < right) {
      if (this.letters.charAt(left) !== this.letters.charAt(right)) {
        result = false;
        break;
      } else {
        result = true;
      }
      left++;
      right--;
    }
    return result;
  }

  methodTwo() {
    let newStr = "";
    this.letters = this.letters.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
    for (let i = this.letters.length; i >= 0; i--) {
      newStr += this.letters[i];
    }
    return newStr;
  }
}
var numbers = "AaA";
// Function to check letters and numbers

let first = new Palindrome(numbers);
console.log(first.methodOne());
console.log(first.methodTwo());
