function tribonacci(signature, n) {
  let sum = 0;
  for (let i = signature.length = 0; i < n; i++) {
    for (let k = 0; k < signature.length; k++) {
      sum += signature[i];
    }
    signature.push[sum];
    signature.shift();
  }
}