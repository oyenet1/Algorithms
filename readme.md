# Bubble Sort Algorithm

## Overview

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the list is sorted.

## Steps

### Initialization

1. Start with an unsorted array.
2. Initialize a variable `swapped` to `true` to enter the while loop.
3. Determine the length of the array `n`.

### Outer Loop

1. The outer loop runs as long as `swapped` is `true`.
2. At the beginning of each iteration, set `swapped` to `false`.

### Inner Loop

1. The inner loop iterates through the array from the first element to the second-to-last element (`n-1`).
2. For each pair of adjacent elements, compare them:
   - If the current element is greater than the next element, swap them.
   - Set `swapped` to `true` to indicate that a swap has occurred.

### Reduce Range

1. After each pass through the array, decrement `n` by 1 because the last element in the current pass is guaranteed to be in its correct position.

### Termination

1. The algorithm terminates when no swaps are made during a pass through the array (`swapped` remains `false`), indicating that the array is sorted.

## Example Code

```javascript
let bubbleSort = (arr) => {
  let n = arr.length;
  let count = 0;
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
      count++;
    }
    n--;
  }

  return { count, arr };
};

let unsortedArray = [10, 9, 8, 5, 3, 2];
console.log(bubbleSort(unsortedArray));