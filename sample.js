
function power(b, p) {
  let n = 1;
  return [b ** p, n];
}


let methodtwo = (a, b) => {
  let [result, n] = [1, 0];
  for (let i = 0; i < b; i++) {
    n++
    result *= a;
  }
  return [result, n];
}

let newCal = (a, b) => {
  let re = a;
  for (let i = 0; i < b; i++) {
    re *= 2;
  }
  return re;
}


let predict = (amount, odd, times) => {
  return amount * (odd ** times);
}

// console.log(power(2, 1000));
// console.log(methodtwo(2, 1000));
console.log(predict(500, 2.1, 10))