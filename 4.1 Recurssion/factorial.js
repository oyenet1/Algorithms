let factorial = (num) => {
  let res = 1;
  for (let i = num; i > 0; i--) {
    res *= i;
  }
  return res;
};

let factorialTwo = (num) => {
  if (num < 0) return 0;
  if (num < 1) return 1;
  return num * factorial(--num);
};

console.log(factorial(1));
console.log(factorialTwo(1));
