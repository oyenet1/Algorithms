let bubbleSort = (arr) => {
  let swapped = true;
  let n = arr.length;
  let count = 0;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
        // console.log(arr[i]);
      }
      count++;
    }
    n--;
  }

  return { count, arr };
};

let unsortedArray = [10, 9, 8, 5, 3, 2];
console.log(bubbleSort(unsortedArray));
