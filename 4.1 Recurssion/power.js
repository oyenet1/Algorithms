let po = (b, p) => {
 let res = 1;
 for (let i = 0; i < p; i++) {
  res *= b;
 }
 return res;
}

let powerTwo = (b, p) => {
 if (p === 0) return 1;
 return b * powerTwo(b, p - 1);
}

console.log(powerTwo(2, 4))
console.log(po(2, 4))