function diaDiff(arr) {
  let ld = 0;
  let rd = 0;
  let row = arr.length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        ld += arr[i][j];
      }
      if (i + j + 1 == row) {
        rd += arr[i][j];
      }
    }
  }
  return Math.abs(rd - ld);
}