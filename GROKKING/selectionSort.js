// selectionsort. O(N*N)

function smallest(arr) {
  low = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[low] > arr[i]) {
      low = i;
    }
  }
  return low;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let low = i;
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[low] > arr[k]) {
        low = k;
      }
    }
    if (low !== i) {
      let temp = arr[i];
      arr[i] = arr[low];
      arr[low] = temp;
    }
  }
  return arr;
}


let numbers = [21, 3, 76, 13, 45, 17, 35];

console.log(selectionSort(numbers));