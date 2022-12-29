function factorial(n) {
  // result = n;
  // for (let i = 1; i < n; i++) {
  //   result *= (n - i);
  // }
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }

}
console.log(factorial(3));