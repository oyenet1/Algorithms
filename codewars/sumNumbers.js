function numberSum(number) {

}

function descendingOrder(numbers) {
  // let newstr = '';
  numbers = String(numbers);
  for (let i = 0; i < numbers.length; i++) {
    let low = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[low] < numbers[j]) {
        low = j;
      }
    }
    let temp = numbers[i];
    numbers[i] = numbers[low];
    numbers[low] = temp;
  }
  return numbers;
}

console.log(descendingOrder(234482912));