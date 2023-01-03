// selectionsort. O(N*N
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let low = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[low] < arr[j]) {
        low = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[low];
    arr[low] = temp;
  }
  return arr;
}



let numbers = [5, 3, 48, 16, 16, 32, 70, 44, 2, 3, 56, 49, 11];
// let numbers = [21, 3, 25, 76, 13, 45, 17, 35, 2];

console.log(selectionSort(numbers));