let soNN = (num) => {
 let result = 0;
 for (let i = num; i > 0; i--) {
  result += i;
 }
 return result;
}

let soNNTwo = (num) => {
 return num * (num + 1) / 2;
}

let soNNThree = (num) => {
 if (num === 1) return 1;
 return num + soNNThree(--num);
}

console.log(soNN(4))
console.log(soNNTwo(4))
console.log(soNNThree(4))