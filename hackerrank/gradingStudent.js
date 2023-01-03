function grdStud(arr) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] > 37)) {
      let remain = arr[i] % 5;
      if (remain >= 3) {
        arr[i] += (5 - remain);
      }
    }
  }
  return arr;
}

let numbers = [4, 73, 67, 38, 33];
console.log(grdStud(numbers));