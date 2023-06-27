let poa = (arr) => {
 let res = 1;
 for (let i = 0; i < arr.length; i++) {
  res *= arr[i];
 }
 return res;
}

let poa2 = (arr) => {
 if (arr.length === 0) return 1;
 return arr[0] * poa2(arr.slice(1));
}

console.log(poa([2, 4, 2, 1, 3, 6]));
console.log(poa2([2, 4, 2, 1, 3, 6]));