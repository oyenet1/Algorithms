const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = key;
  }

  return arr;
};

let sample = [35, 23, 5, 14, 3];
let sample2 = [1, 2, 4, 12];
let sample3 = [
  13, 23, 4, 1, 52, 6, 12, 14, 3, 25, 32, 67, 134, 2, 43, 6, 8, 34, 8, 69, 15,
  23, 5, 14, 324, 33,
];

console.log(insertionSort(sample));
console.log(insertionSort(sample2));
console.log(insertionSort(sample3));
