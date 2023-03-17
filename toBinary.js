function toBinary(N) {
  let bi = [];
  let count = 0;
  while (N > 0) {
    bi[count] = N % 2;
    N = Math.floor(N / 2);
    count++;
  }
  let by = [];
  for (let i = 0; i < bi.length; i++) {
    by[i] = bi[bi.length - i - 1];
  }
  return by;
}

console.log(toBinary(4));