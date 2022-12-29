// return the lowest value togrther with the index
function smallest(arr) {
  let lowest = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[lowest] > arr[i]) {
      lowest = i;
    }
  }
  return [arr[lowest], lowest];
}

let numbers = [20, 5, 7, 23, 4, 57, 8, 9, 12, 6, 56, 5, 4, 3, 21, 98];

console.log(smallest(numbers));