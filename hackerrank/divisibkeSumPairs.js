function divisibleSumPairs(n, k) {
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      if ((n[i] + n[j]) % k == 0) {
        count++;
      }
    }
  }
  return count;
}

console.log(divisibleSumPairs([1, 3, 2, 6, 1, 2], 3));
