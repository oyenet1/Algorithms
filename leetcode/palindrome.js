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
    console.log([this.letters.charAt(left), this.letters.charAt(right)]);
    break;
   } else {
    result = true;
   }
   left++;
   right--;
  }
  // return [this.letters, Math.floor(this.letters.length / 2)];

  return result;
 }

 isPalindrome() {
  if (!this.letters.length) return true;

  const alphaNumeric = filterAlphaNumeric(
   this.letters
  ); /* Time O(N) | Space O(N) */
  const reversed = reverse(alphaNumeric); /* Time O(N) | Space O(N) */

  return alphaNumeric === reversed;
 }
}
var numbers = "A man, a plan, a canal: Panama";
// Function to check letters and numbers

let first = new Palindrome(numbers);
console.log(first.methodOne());
