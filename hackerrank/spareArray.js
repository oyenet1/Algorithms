function spareA(arr, query) {
  let result = [];
  let count = 0;
  for (let i = 0; i < query.length; i++) {
    result.push(0)
    for (let j = 0; j < arr.length; j++) {
      if (query[i] === arr[j]) {
        result[count] += 1;
      }
    }
    count++;
  }
  return result;
}

console.log(spareA(['ab', 'abc', 'a', 'ab', 'abc', 'a', 'ba'], ['a', 'ba', 'abc', 'c']))